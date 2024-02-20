import styled, { css } from 'styled-components';

const SelectList = styled.div<{expanded: boolean, boxWidth?: string; right?:string; }>`
  display: ${({ expanded }) => expanded ? 'block' :'none' };
  position: absolute;
  opacity: 0.99;
  border-radius: 2px;
  box-shadow: 0 5px 15px 0 hsla(212, 45%, 6%, 0.11);
  background-color: #ffffff;
  border-top: 3px solid hsla(205,100%,72%,1.000);
  margin-top: 5px;
  z-index: 100;
  width: ${({ boxWidth }) => boxWidth ? boxWidth: 'inherit'};
  ${ ({ right }) => right && css`
    right: ${right};
  `};
`;

export default SelectList;