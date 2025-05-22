import React from 'react';
import styled from 'styled-components';

const ColorsStory = {
  title: 'Misc',
  decorators: []
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`

const ColorContainer = styled.div`
  margin-bottom: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`;

const Swatch = styled.div<{$color: string}>`
  height: 96px;
  border-radius: 4px;

  ${({$color}) => $color && `
    background: var(${$color});
  `};
`

const SwatchName = styled.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`;



export const _Colors = () => {

  const palette : string[] = ['primary', 'secondary', 'grey', 'info', 'success', 'caution', 'warning', 'orange', 'red', 'green', 'black', 'white'];
  const references : string[] = ['1','2','3','4','5','6','7','8','9','10','11','12'];
 
  const generatePalette = (name: string, alpha?: boolean) => {
    return references.map((iteration) => {
      const $color = `--${name}-${alpha ? 'a' : ''}${iteration}`;
      return(
        <Swatch {...{$color}}>
          <SwatchName>{$color}</SwatchName>
        </Swatch>
      );
    })
  }

  return <Container>
    {palette.map((value)=> {
      return <ColorContainer>
        <Title>{value}</Title>
        <Grid>
          { generatePalette(value) }
          { generatePalette(value, true) }
        </Grid>
      </ColorContainer>
    })}
  </Container>;
};

export default ColorsStory;