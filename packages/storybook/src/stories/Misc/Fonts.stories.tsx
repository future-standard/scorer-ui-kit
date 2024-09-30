import React from 'react';
import styled from 'styled-components';

export default {
  title: 'Misc',
  decorators: []
};

const Container = styled.div`
  padding: 80px;
  background: var(--grey-2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--columnPadding, 16px);
  text-rendering: optimizeLegibility; 
`;

const Item = styled.div<{font: string, zeplinWeight: number | string, figmaWeight: number | string, italic?: boolean}>`
  font-family: ${({font}) => font === 'Lato' ? `var(--font-data)` : `var(--font-ui)`};
  font-weight: ${({zeplinWeight}) => zeplinWeight};
  font-style: ${({italic}) => italic ? 'italic' : 'normal'};
  color: var(--grey-12);

  > div {
    display: none;
  }
`

interface IFontMeta {
  figmaWeight: number | string
  zeplinWeight: number | string
}
const FontMeta : React.FC<IFontMeta> = ({figmaWeight, zeplinWeight}) => {
  return (
    <div>
      Figma: {figmaWeight} - Zeplin: {zeplinWeight}
    </div>
  )
} 

export const _FontSheet = () => {

  return <Container>
    <Item font={'Lato'} zeplinWeight={100} figmaWeight={100}>
      This is Lato Hairline
    </Item>

    <Item font={'Lato'} zeplinWeight={100} figmaWeight={100} italic>
      This is Lato Hairline Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={200} figmaWeight={200}>
      This is Lato ExtraLight
    </Item>

    <Item font={'Lato'} zeplinWeight={200} figmaWeight={200} italic>
      This is Lato ExtraLight Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={300} figmaWeight={300}>
      This is Lato Light
    </Item>

    <Item font={'Lato'} zeplinWeight={300} figmaWeight={300} italic>
      This is Lato Light Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={'normal'} figmaWeight={'normal'}>
      This is Lato Regular
    </Item>

    <Item font={'Lato'} zeplinWeight={'normal'} figmaWeight={'normal'} italic>
      This is Lato Regular Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={500} figmaWeight={500}>
      This is Lato Medium
    </Item>

    <Item font={'Lato'} zeplinWeight={500} figmaWeight={500} italic>
      This is Lato Medium Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={600} figmaWeight={600}>
      This is Lato SemiBold
    </Item>

    <Item font={'Lato'} zeplinWeight={600} figmaWeight={600} italic>
      This is Lato SemiBold Italic
    </Item>
    
    <Item font={'Lato'} zeplinWeight={'bold'} figmaWeight={'bold'}>
      This is Lato Bold
    </Item>

    <Item font={'Lato'} zeplinWeight={'bold'} figmaWeight={'bold'} italic>
      This is Lato Bold Italic
    </Item>
    
    <Item font={'Lato'} zeplinWeight={800} figmaWeight={800}>
      This is Lato ExtraBold
    </Item>

    <Item font={'Lato'} zeplinWeight={800} figmaWeight={800} italic>
      This is Lato ExtraBold Italic
    </Item>

    <Item font={'Lato'} zeplinWeight={900} figmaWeight={900}>
      This is Lato Black
    </Item>

    <Item font={'Lato'} zeplinWeight={900} figmaWeight={900} italic>
      This is Lato Black Italic
    </Item>

    
    <Item font={'Monorale'} zeplinWeight={100} figmaWeight={100}>
      This is Monorale Thin
    </Item>

    <Item font={'Monorale'} zeplinWeight={100} figmaWeight={100} italic>
      This is Monorale Thin Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={200} figmaWeight={200}>
      This is Monorale Extra Light
    </Item>

    <Item font={'Monorale'} zeplinWeight={200} figmaWeight={200} italic>
      This is Monorale Extra Light Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={300} figmaWeight={300}>
      This is Monorale Light
    </Item>

    <Item font={'Monorale'} zeplinWeight={300} figmaWeight={300} italic>
      This is Monorale Light Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={400} figmaWeight={400}>
      This is Monorale 
    </Item>

    <Item font={'Monorale'} zeplinWeight={400} figmaWeight={400} italic>
      This is Monorale Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={500} figmaWeight={500}>
      This is Monorale Medium
    </Item>

    <Item font={'Monorale'} zeplinWeight={500} figmaWeight={500} italic>
      This is Monorale Medium Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={600} figmaWeight={600}>
      This is Monorale Semibold
    </Item>

    <Item font={'Monorale'} zeplinWeight={600} figmaWeight={600} italic>
      This is Monorale Semibold Italic
    </Item>

    <Item font={'Monorale'} zeplinWeight={'bold'} figmaWeight={'bold'}>
      This is Monorale Bold
    </Item>

    <Item font={'Monorale'} zeplinWeight={800} figmaWeight={800}>
      This is Monorale Extra Bold
    </Item>

    <Item font={'Monorale'} zeplinWeight={900} figmaWeight={900}>
      This is Monorale Black
    </Item> 
    

  </Container>;
};