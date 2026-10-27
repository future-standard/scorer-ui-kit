import type { Decorator } from '@storybook/react-vite';
import styled from 'styled-components';

const Frame = styled.div<{ $height: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ $height }) => $height};
  background-color: var(--grey-2);
  background-image: linear-gradient(180deg, var(--grey-2) 0%, var(--grey-3) 100%);
`;

/* Page-level stories fill the canvas, but an absolutely positioned wrapper adds no height to the
   inline docs preview, which then collapses to a thin strip. The frame takes the viewport on the
   canvas and a fixed height in docs, so the preview stays inline and the docs controls keep
   working. Pair it with parameters.layout 'fullscreen'. */
export const pageFrame: Decorator = (Story, { viewMode }) => (
  <Frame $height={viewMode === 'docs' ? '600px' : '100vh'}>
    <Story />
  </Frame>
);
