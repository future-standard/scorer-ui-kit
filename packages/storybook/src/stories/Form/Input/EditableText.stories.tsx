import { boolean, number, text } from '@storybook/addon-knobs';
import { useState } from 'react';
import { EditableText } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import { sleep } from '../../helpers';

const EditableTextStory = {
  title: 'Form/Input',
  component: EditableText,
  decorators: [],
};

/* A 32px band, the height of TopBar's bottom area, so the field and its two 24px buttons are seen in
   the geometry they were sized for. The border is the band, not part of the component. */
const Row = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 100px;
  padding: 0 16px;
  border: 1px solid var(--grey-4);
`;

const NarrowRow = styled(Row)`
  max-width: 260px;
`;

export const _EditableText = () => {
  const [name, setName] = useState('Example Name');
  const saveDelay = number('Save delay (ms)', 1200);
  const saveOnClickOutside = boolean('Commit on click outside', false);
  const alwaysShowEditIcon = boolean('Always show the pencil', false);
  const allowEmpty = boolean('Allow an empty value', false);
  const isDisabled = boolean('Disabled', false);
  const fieldWidth = text('Field width', '240px');

  const handleSave = async (value: string) => {
    // database wait example
    await sleep(saveDelay);
    setName(value);
    action('save')(value);
  };

  return (
    <Row>
      <EditableText
        value={name}
        label='Space name'
        onSave={handleSave}
        onCancel={action('cancel')}
        onEditingChange={action('editing-change')}
        {...{ saveOnClickOutside, alwaysShowEditIcon, allowEmpty, fieldWidth }}
        disabled={isDisabled}
      />
    </Row>
  );
};

/* The other half of the pattern Input and SmallInput offer: with no `value` prop there is nothing
   holding the text above the component, so it keeps its own and adopts each save. */
export const _EditableTextUncontrolled = () => (
  <Row>
    <EditableText defaultValue='Example Name' label='Space name' onSave={action('save')} />
  </Row>
);

/* Its own story rather than a knob, so the sweep drives the truncation case on every run: the
   component only shrinks when something above it constrains the width. */
export const _EditableTextLongValue = () => {
  const [name, setName] = useState('A space name long enough to run past the end of its row');

  return (
    <NarrowRow>
      <EditableText
        value={name}
        label='Space name'
        fieldWidth='180px'
        onSave={(value) => setName(value)}
      />
    </NarrowRow>
  );
};

export default EditableTextStory;
