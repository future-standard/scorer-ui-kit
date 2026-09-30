import { type ChangeEventHandler, useState } from 'react';

type FieldValue = string | readonly string[] | number | undefined | null;

interface IUseRequiredDot<E extends HTMLInputElement | HTMLTextAreaElement> {
  required?: boolean;
  alwaysShowRequiredDot?: boolean;
  value?: FieldValue;
  defaultValue?: FieldValue;
  onChange?: ChangeEventHandler<E>;
}

const hasContent = (value: FieldValue) =>
  value !== undefined && value !== null && String(value) !== '';

/* Decides whether the label's required dot shows: only while the field is required and empty, unless
   the consumer opted out. `value != null` decides controlled mode, the same rule React applies, so a
   controlled consumer keeps their own onChange and React's "value without onChange" warning. */
export const useRequiredDot = <E extends HTMLInputElement | HTMLTextAreaElement>({
  required = false,
  alwaysShowRequiredDot = false,
  value,
  defaultValue,
  onChange,
}: IUseRequiredDot<E>) => {
  const isControlled = value !== undefined && value !== null;
  const [ownHasValue, setOwnHasValue] = useState(hasContent(defaultValue));

  const hasValue = isControlled ? hasContent(value) : ownHasValue;
  const showRequiredDot = required && (alwaysShowRequiredDot || !hasValue);

  const trackedOnChange: ChangeEventHandler<E> = (event) => {
    setOwnHasValue(event.currentTarget.value !== '');
    onChange?.(event);
  };

  return { showRequiredDot, onChange: isControlled ? onChange : trackedOnChange };
};
