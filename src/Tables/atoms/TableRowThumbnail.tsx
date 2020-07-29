import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ hoverZoom?: boolean }>`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 40px;
  opacity: 0.65;

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
  background-size: contain;

  display: ${p => p.image ? 'block' : 'none'};
`;

interface IProps {
  image?: string
  hoverZoom?: boolean
}

// Image
// No Image Placeholder

const TableRowThumbnail : React.FC<IProps> = ({hoverZoom = true, image}) => {
  return <Container {...{hoverZoom}}>
    <Image {...{image}} />
  </Container>;
};

export default TableRowThumbnail;