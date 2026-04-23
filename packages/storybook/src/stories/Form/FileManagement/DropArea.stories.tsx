import { text } from '@storybook/addon-knobs';
import { DropArea } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
`;

const DropAreaStory = {
  title: 'Form/File Management',
  component: DropArea,
  decorators: [],
};

export const _DropArea = () => {
  const textVal = text('Text', 'Drop a file');
  const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');

  const myCallback = (newFiles: FileList) => {
    console.debug('file', newFiles);
    if (newFiles.length === 1) {
      showValue(newFiles[0].name);
    } else {
      showValue(newFiles);
    }
  };

  return (
    <Container>
      <DropArea height={heightVal} text={textVal} dropCallback={myCallback} />
    </Container>
  );
};

export default DropAreaStory;
