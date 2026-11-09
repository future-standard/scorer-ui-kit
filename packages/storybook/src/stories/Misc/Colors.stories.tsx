import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`;

const ColorContainer = styled.div`
  container-type: inline-size;
  margin-bottom: 80px;
`;

// A swatch needs 90px for the longest name (--secondary-a12) on one line: 12 columns from 1124px,
// otherwise halves, so a row never ends with a single orphan step.
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 4px;
  text-align: center;

  @container (width < 1124px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @container (width < 560px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & + & {
    margin-top: 4px;
  }
`;

const Swatch = styled.div<{ $color: string }>`
  position: relative;
  height: 96px;
  border-radius: 4px;
  overflow: hidden;

  ${({ $color }) =>
    $color &&
    `
    background: var(${$color});
  `};
`;

const SwatchName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  line-height: 1.4;
  padding: 2px 3px;
  border-radius: 4px 0 4px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`;
const ColorSheet = () => {
  const palette: string[] = [
    'primary',
    'secondary',
    'grey',
    'info',
    'success',
    'caution',
    'warning',
    'orange',
    'red',
    'green',
    'black',
    'white',
  ];
  const references: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const generatePalette = (name: string, alpha?: boolean) => {
    return references.map((iteration) => {
      const $color = `--${name}-${alpha ? 'a' : ''}${iteration}`;
      return (
        <Swatch key={$color} {...{ $color }}>
          <SwatchName>{$color}</SwatchName>
        </Swatch>
      );
    });
  };

  return (
    <Container>
      {palette.map((value) => {
        return (
          <ColorContainer key={value}>
            <Title>{value}</Title>
            <Grid>{generatePalette(value)}</Grid>
            <Grid>{generatePalette(value, true)}</Grid>
          </ColorContainer>
        );
      })}
    </Container>
  );
};

const meta = {
  title: 'Misc/Colors',
  tags: ['!autodocs'],
  render: () => <ColorSheet />,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
