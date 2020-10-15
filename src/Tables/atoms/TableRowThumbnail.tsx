import React from 'react';
import styled, { css } from 'styled-components';

type VideoAspects = '4:3' | '16:9';

const Container = styled.div<{ hoverZoom?: boolean, aspect?: VideoAspects }>`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 55px;
  height: auto;
  opacity: 0.65;
  margin-right: 10px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 75%;
    ${({aspect}) => aspect === '16:9' && css`
      padding-left: 56.25%;
    `}
  }

  ${({theme}) => theme && css`
    transition:
      opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut},
      transform ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeOut};
  `}

  &:hover {
    ${({theme, hoverZoom}) => theme && hoverZoom && css`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }

`;
const Image = styled.div<{ image?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${p => p.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${p => p.image ? 'block' : 'none'};
`;

interface IProps {
  image?: string
  hoverZoom?: boolean,
  aspect?: VideoAspects
}

// Image
// No Image Placeholder

const TableRowThumbnail : React.FC<IProps> = ({hoverZoom = true, image}) => {
  return (
    <Container {...{hoverZoom}} aspect='16:9'>
      <Image {...{image}} />
    </Container>
  );
};

export default TableRowThumbnail;
