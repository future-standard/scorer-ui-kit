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
`;

const Item = styled.div<{font: string, weight: number | string, italic?: boolean}>`
  font-family: ${({font}) => font === 'Lato' ? `var(--font-data)` : `var(--font-ui)`};
  font-weight: ${({weight}) => weight};
  font-style: ${({italic}) => italic ? 'italic' : 'normal'};

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
    <Item font={'Lato'} weight={200}>
      This is Lato Thin
      <FontMeta figmaWeight={250} zeplinWeight={200} />
    </Item>

    <Item font={'Lato'} weight={300}>
      This is Lato Light
      <FontMeta figmaWeight={300} zeplinWeight={300} />
    </Item>

    <Item font={'Lato'} weight={'normal'}>
      This is Lato Regular
      <FontMeta figmaWeight={400} zeplinWeight={'normal'} />
    </Item>

    <Item font={'Lato'} weight={'normal'} italic>
      This is Lato Regular Italic
      <FontMeta figmaWeight={400} zeplinWeight={'normal'} />
    </Item>

    <Item font={'Lato'} weight={'bold'}>
      This is Lato Bold
      <FontMeta figmaWeight={700} zeplinWeight={'bold'} />
    </Item>


    <Item font={'Monorale'} weight={100}>
      This is Monorale Thin
      <FontMeta figmaWeight={250} zeplinWeight={100} />
    </Item>

    <Item font={'Monorale'} weight={100} italic>
      This is Monorale Thin Italic
      <FontMeta figmaWeight={250} zeplinWeight={100} />
    </Item>

    <Item font={'Monorale'} weight={200}>
      This is Monorale Extra Light
      <FontMeta figmaWeight={275} zeplinWeight={200} />
    </Item>

    <Item font={'Monorale'} weight={200} italic>
      This is Monorale Extra Light Italic
      <FontMeta figmaWeight={275} zeplinWeight={200} />
    </Item>

    <Item font={'Monorale'} weight={300}>
      This is Monorale Light
      <FontMeta figmaWeight={300} zeplinWeight={300} />
    </Item>

    <Item font={'Monorale'} weight={300} italic>
      This is Monorale Light Italic
      <FontMeta figmaWeight={300} zeplinWeight={300} />
    </Item>

    <Item font={'Monorale'} weight={400}>
      This is Monorale 
      <FontMeta figmaWeight={400} zeplinWeight={'normal'} />
    </Item>

    <Item font={'Monorale'} weight={400} italic>
      This is Monorale Italic
      <FontMeta figmaWeight={400} zeplinWeight={'normal'} />
    </Item>

    <Item font={'Monorale'} weight={500}>
      This is Monorale Medium
      <FontMeta figmaWeight={500} zeplinWeight={500} />
    </Item>

    <Item font={'Monorale'} weight={500} italic>
      This is Monorale Medium Italic
      <FontMeta figmaWeight={500} zeplinWeight={500} />
    </Item>

    <Item font={'Monorale'} weight={600}>
      This is Monorale Semibold
      <FontMeta figmaWeight={600} zeplinWeight={600} />
    </Item>

    <Item font={'Monorale'} weight={600} italic>
      This is Monorale Semibold Italic
      <FontMeta figmaWeight={600} zeplinWeight={600} />
    </Item>

    <Item font={'Monorale'} weight={'bold'}>
      This is Monorale Bold
      <FontMeta figmaWeight={700} zeplinWeight={'bold'} />
    </Item>

    <Item font={'Monorale'} weight={800}>
      This is Monorale Extra Bold
      <FontMeta figmaWeight={800} zeplinWeight={800} />
    </Item>

    <Item font={'Monorale'} weight={900}>
      This is Monorale Black
      <FontMeta figmaWeight={900} zeplinWeight={900} />
    </Item>

  </Container>;
};