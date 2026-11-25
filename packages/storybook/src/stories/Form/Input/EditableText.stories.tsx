import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { EditableText } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { sleep } from '../../helpers';

/* A 32px band, the height of TopBar's bottom area, so the field and its two 24px buttons are seen in
   the geometry they were sized for. The border is the band, not part of the component. */
const Row = styled.div<{ $maxWidth?: string }>`
  display: flex;
  align-items: center;
  height: 32px;
  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  padding: 0 16px;
  border: 1px solid var(--grey-4);
`;

type Args = ComponentProps<typeof EditableText> & { saveDelay: number; rowMaxWidth: string };

const meta = {
  title: 'Form/Input/EditableText',
  component: EditableText,
  argTypes: {
    saveDelay: { name: 'Save delay (ms)' },
    rowMaxWidth: { name: 'Row max width (demo band)' },
    editIcon: { control: 'select', options: Object.keys(IconSVGs) },
    defaultValue: { control: false, table: { defaultValue: { summary: 'uncontrolled only' } } },
  },
  args: {
    saveDelay: 1200,
    rowMaxWidth: '',
    value: 'Example Name',
    label: 'Space name',
    saveOnClickOutside: false,
    allowEmpty: false,
    fieldWidth: '240px',
    editIcon: 'Edit',
    alwaysShowEditIcon: false,
    editText: 'Edit',
    saveText: 'Save',
    savingText: 'Saving',
    cancelText: 'Cancel',
    disabled: false,
    onSave: fn(),
    onCancel: fn(),
    onEditingChange: fn(),
  },
  render: function Render({ saveDelay, rowMaxWidth, ...args }) {
    const [{ value }, updateArgs] = useArgs<Args>();

    const onSave = async (next: string) => {
      // database wait example
      await sleep(saveDelay);
      await args.onSave?.(next);
      updateArgs({ value: next });
    };

    return (
      <Row $maxWidth={rowMaxWidth}>
        <EditableText {...args} value={value} onSave={onSave} />
      </Row>
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/* The other half of the pattern Input and SmallInput offer: with no `value` prop there is nothing
   holding the text above the component, so it keeps its own and adopts each save. */
export const Uncontrolled: Story = {
  argTypes: {
    value: { control: false, table: { defaultValue: { summary: 'uncontrolled' } } },
    defaultValue: { control: 'text' },
  },
  args: {
    defaultValue: 'Example Name',
  },
  render: ({ saveDelay, rowMaxWidth, value: _value, ...args }) => {
    const onSave = async (next: string) => {
      await sleep(saveDelay);
      await args.onSave?.(next);
    };

    return (
      <Row $maxWidth={rowMaxWidth}>
        <EditableText key={args.defaultValue} {...args} onSave={onSave} />
      </Row>
    );
  },
};

/* Its own story rather than a control, so the sweep drives the truncation case on every run: the
   component only shrinks when something above it constrains the width. */
export const LongValue: Story = {
  args: {
    value: 'A space name long enough to run past the end of its row',
    fieldWidth: '180px',
    rowMaxWidth: '260px',
  },
};
