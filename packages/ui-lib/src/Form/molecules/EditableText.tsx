import type React from 'react';
import { type InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from '../../hooks';
import Icon from '../../Icons/Icon';
import Button from '../atoms/Button';
import ButtonWithLoading from '../atoms/ButtonWithLoading';

interface OwnProps {
  /** controlled: the text on show, and it stays authoritative — a value saved elsewhere replaces it */
  value?: string;
  /** uncontrolled: the starting text, after which the component keeps it and updates it on save */
  defaultValue?: string;
  /** accessible name for the field, e.g. 'Space name' */
  label: string;
  /** commit. May return a promise: the controls stay busy until it settles, and a rejection leaves
   *  the field open with the typed text intact so the user can retry */
  onSave?: (value: string) => void | Promise<void>;
  /** edit abandoned: Escape, Cancel, or a click outside */
  onCancel?: () => void;
  /** entering or leaving edit mode */
  onEditingChange?: (isEditing: boolean) => void;
  /** commit on click outside instead of discarding (default false) */
  saveOnClickOutside?: boolean;
  /** allow committing an empty value (default false: Save is disabled and Enter does nothing) */
  allowEmpty?: boolean;
  /** width of the field while editing, any CSS length (default '240px') */
  fieldWidth?: string;
  /** icon name (@future-standard/icons) for the edit affordance (default 'Edit') */
  editIcon?: string;
  /** keep the pencil visible instead of revealing it on hover and focus */
  alwaysShowEditIcon?: boolean;
  /** appended to the value as the trigger's accessible name (default 'Edit') */
  editText?: string;
  /** Save button text (default 'Save') */
  saveText?: string;
  /** Save button text while the save is in flight (default 'Saving') */
  savingText?: string;
  /** Cancel button text (default 'Cancel') */
  cancelText?: string;
  /** render as plain text, with no edit affordance */
  disabled?: boolean;
}

/* `value` and `defaultValue` are omitted from the DOM attributes because they are redeclared above
   with a different meaning: they are the component's text, not the field's. The field is always
   controlled internally by the draft, so neither may reach it — React reports a controlled input
   carrying a defaultValue through console.error, which the story sweep counts as a failure.

   The rest are omitted because the component sets them after `{...props}` reaches the field, so any
   of them would compile and then be discarded: the change callback is `onSave`, the field's width is
   `fieldWidth`, `aria-label` comes from the required `label`, and `aria-busy` and `readOnly` both
   track the save in flight. `disabled` already covers "not editable", so a `readOnly` that only
   half-applied — a field you can open but not type into — is not worth having.

   Everything else still spreads through to the field, `ref` included (React 19 passes it as a plain
   prop) — but note the field is only mounted while editing, so a ref to it is null the rest of the
   time. Bind this with RHF's `<Controller>`, not `register()`. */
export type IEditableText = OwnProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'defaultValue' | 'onChange' | 'width' | 'readOnly' | 'aria-label' | 'aria-busy'
  >;

const IconSlot = styled.span`
  display: flex;
  flex-shrink: 0;
`;

const Text = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/* The typography sits here rather than on each state, so the field and the display text cannot drift
   apart and a consumer restyling the component only has to say it once. Both states read it back
   with `font: inherit`.

   `height: 100%` so the control tracks whatever row it is dropped into (TopBar's bottom area is 32px
   by default, 40px if the consumer asks for it) and both states stay centred in it. */
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  height: 100%;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`;

/* `& svg [stroke]`: the pencil follows the inherited text colour, so restyling the component's
   `color` takes the glyph with it. Same [stroke] mechanism as ChipButton and IconButton, which pin
   an explicit token instead because their own state owns the colour.

   The reveal covers `:focus-visible` as well as `:hover`. Hover alone (EditCell's rule) leaves a
   keyboard user tabbing onto a target they cannot see.

   `outline-offset` is positive, unlike ChipButton's inset ring: there is no filled cell to sit
   inside here, and an inset ring would cross the text. */
const Trigger = styled.button<{ $alwaysShowIcon: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font: inherit;
  color: inherit;
  text-align: left;

  & svg [stroke] { stroke: currentColor; }

  ${IconSlot} {
    opacity: 0;
    transition: opacity var(--speed-normal) var(--easing-primary-in-out);
  }

  &:hover ${IconSlot},
  &:focus-visible ${IconSlot} {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--primary-9);
    outline-offset: 2px;
  }

  ${({ $alwaysShowIcon }) =>
    $alwaysShowIcon &&
    css`
    ${IconSlot} { opacity: 1; }
  `}
`;

/* 24px, matching a size='small' Button, so the field and the two buttons share one baseline and the
   set fits a 32px row with 4px to spare. The focus treatment mirrors SmallInput's own
   `focus-within` rule, so an inline field and a form field read as the same control. */
const Field = styled.input<{ $fieldWidth: string }>`
  box-sizing: border-box;
  height: 24px;
  width: ${({ $fieldWidth }) => $fieldWidth};
  max-width: 100%;
  min-width: 0;
  padding: 0 8px;
  border: 1px solid var(--input-default-border-color);
  border-radius: 3px;
  background: var(--input-default-background-color);
  color: var(--input-color-default);
  font: inherit;
  outline: none;

  &:focus {
    border-color: var(--input-default-focused-border-color);
    box-shadow: 0 3px 3px var(--input-default-focused-shadow-color);
  }

  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  }

  &[readonly] {
    color: var(--input-color-disabled);
  }
`;

/* The buttons are wrapped rather than styled individually: ButtonWithLoading's own outer container is
   not reachable through styled(), so `flex-shrink` has to be set on something above it or a narrow
   row would squash the pair. */
const Actions = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;
`;

const EditableText: React.FC<IEditableText> = ({
  value,
  defaultValue,
  label,
  onSave,
  onCancel,
  onEditingChange,
  saveOnClickOutside = false,
  allowEmpty = false,
  fieldWidth = '240px',
  editIcon = 'Edit',
  alwaysShowEditIcon = false,
  editText = 'Edit',
  saveText = 'Save',
  savingText = 'Saving',
  cancelText = 'Cancel',
  disabled = false,
  type = 'text',
  onKeyDown,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  /* Controlled or uncontrolled, the same choice Input and SmallInput give: pass `value` and the
     caller owns the text, pass `defaultValue` and the component keeps it. Presence of `value`
     decides, so `value=''` is a real controlled empty string rather than a fallback. */
  const [ownText, setOwnText] = useState(defaultValue ?? '');
  const isControlled = value !== undefined;
  const text = isControlled ? value : ownText;

  /* The draft only exists while the field is open, and the display state reads `text` straight back
     from whichever source owns it. That is what keeps a value saved elsewhere from being shadowed by
     stale local state — the defect EditCell works around by rebuilding its rows in an effect. */
  const [draft, setDraft] = useState(text);

  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Set when the close came from the keyboard or one of the buttons, where the user is still on this
     control and would otherwise be dropped to the top of the document. A click outside must leave it
     false: restoring focus there would pull it off whatever they just clicked. */
  const restoreFocus = useRef(false);

  const setEditing = useCallback(
    (next: boolean) => {
      setIsEditing(next);
      onEditingChange?.(next);
    },
    [onEditingChange]
  );

  const open = useCallback(() => {
    setDraft(text);
    setEditing(true);
  }, [text, setEditing]);

  const close = useCallback(
    (withFocus: boolean) => {
      restoreFocus.current = withFocus;
      setEditing(false);
    },
    [setEditing]
  );

  // select rather than just focus, so typing replaces the name instead of appending to it
  useEffect(() => {
    if (!isEditing) {
      return;
    }
    fieldRef.current?.focus();
    fieldRef.current?.select();
  }, [isEditing]);

  useEffect(() => {
    if (isEditing || !restoreFocus.current) {
      return;
    }
    restoreFocus.current = false;
    triggerRef.current?.focus();
  }, [isEditing]);

  // becoming disabled mid-edit has to close the field, not just drop the affordance
  useEffect(() => {
    if (disabled && isEditing) {
      close(false);
    }
  }, [disabled, isEditing, close]);

  const cancel = useCallback(
    (withFocus: boolean) => {
      close(withFocus);
      onCancel?.();
    },
    [close, onCancel]
  );

  const commit = useCallback(
    async (withFocus: boolean) => {
      /* The field keeps focus while saving and `readOnly` does not stop keydowns, so Enter can arrive
         again mid-flight. Without this the second one calls onSave a second time; worse, against a
         parent that updated `value` optimistically it takes the unchanged-text branch below and closes
         the editor while the first save is still running. The Save button needs no such guard —
         ButtonWithLoading disables itself while `loading`. */
      if (isSaving) {
        return;
      }
      const next = draft.trim();
      if (!next && !allowEmpty) {
        return;
      }
      // nothing was changed, so there is nothing to ask the consumer to save
      if (next === text) {
        close(withFocus);
        return;
      }
      setIsSaving(true);
      try {
        await onSave?.(next);
        // uncontrolled: no caller is going to feed the new text back in, so keep it here. Only after
        // onSave settles, or a rejected save would leave the display showing text that never saved.
        if (!isControlled) {
          setOwnText(next);
        }
        close(withFocus);
      } catch {
        // the save failed: stay open with the text intact so the user can retry. Reporting the
        // failure is the consumer's job, inside their own onSave.
      } finally {
        setIsSaving(false);
      }
    },
    [isSaving, draft, allowEmpty, text, isControlled, onSave, close]
  );

  // the document listener also fires while the field is closed, and a click landing mid-save must not
  // discard the text the save is already carrying
  const onClickOutside = useCallback(() => {
    if (!isEditing || isSaving) {
      return;
    }
    if (saveOnClickOutside) {
      void commit(false);
      return;
    }
    cancel(false);
  }, [isEditing, isSaving, saveOnClickOutside, commit, cancel]);

  useClickOutside(containerRef, onClickOutside);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e);

      /* An IME sends both of these keys as ordinary keydowns while a composition is open: Enter to
         confirm the candidate, Escape to abandon it. Neither is a decision about the field, so acting
         on them would close the editor under a Japanese, Chinese or Korean user mid-word. Enter is the
         worse of the two: the confirmed text has not necessarily reached `draft` yet, so the commit
         could store a truncated name. */
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.key === 'Enter') {
        // inside a form this would submit it
        e.preventDefault();
        void commit(true);
        return;
      }
      if (e.key === 'Escape') {
        cancel(true);
      }
    },
    [onKeyDown, commit, cancel]
  );

  const canSave = allowEmpty || draft.trim().length > 0;

  if (isEditing) {
    return (
      <Container ref={containerRef}>
        <Field
          {...props}
          ref={fieldRef}
          type={type}
          $fieldWidth={fieldWidth}
          aria-label={label}
          aria-busy={isSaving}
          /* readOnly, not disabled: a disabled input drops focus to the document body, and Escape
             would stop working for the rest of the save */
          readOnly={isSaving}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Actions>
          <ButtonWithLoading
            size='small'
            loading={isSaving}
            disabled={!canSave}
            /* ButtonWithLoading keeps its Spinner mounted and merely collapses it, and the Spinner
               carries aria-label='Loading' — so without a name of its own this button announces
               "Save Loading" while idle. Naming it after the visible word also keeps WCAG 2.5.3. */
            aria-label={isSaving ? savingText : saveText}
            onClick={() => {
              void commit(true);
            }}
          >
            {isSaving ? savingText : saveText}
          </ButtonWithLoading>
          {/* kept mounted while saving, unlike EditCell, which hides it: in a 32px row the width it
              leaves behind would shift everything else */}
          <Button design='secondary' size='small' disabled={isSaving} onClick={() => cancel(true)}>
            {cancelText}
          </Button>
        </Actions>
      </Container>
    );
  }

  return (
    <Container ref={containerRef}>
      {disabled ? (
        <Text>{text}</Text>
      ) : (
        <Trigger
          ref={triggerRef}
          type='button'
          /* with no text to show, a pencil that only appears on hover leaves nothing visible to aim
             at — so an empty value keeps it on whatever the consumer asked for */
          $alwaysShowIcon={alwaysShowEditIcon || text === ''}
          /* the name has to carry the visible text, or a bare 'Edit' fails WCAG 2.5.3 (Label in
             Name) for anyone driving this by voice */
          aria-label={`${text}, ${editText}`}
          onClick={open}
        >
          <Text>{text}</Text>
          <IconSlot aria-hidden='true'>
            <Icon icon={editIcon} size={12} />
          </IconSlot>
        </Trigger>
      )}
    </Container>
  );
};

export default EditableText;
