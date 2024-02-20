import styled, { css } from 'styled-components';

type SelectType = 'primary' | 'toolbar';

const SelectOption = styled.div<{ selected?: boolean, disabled?: boolean, selectType?: SelectType }>`
  font-family: ${({ theme }) => theme.fontFamily.data};
  height: 40px;
  font-size: 16px;
  color: hsl(0, 0%, 53%);
  min-width: 10rem;
  padding: 8px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  align-items: center;
  user-select: none;
  width: 100%;
  font-style: bold; color: hsl(0, 0%, 53%);
  ${({ disabled }) => disabled && css`
    font-style: normal;
    opacity: 0.5;
    color: hsla(215, 67%, 93%,.5);
  `}
  ${({ selected }) => selected && css`
    font-style: bold;
    color: #70C4FF;
  `}

  :hover {
    opacity: 0.75;
  };
  
${ ({ selectType }) => selectType === 'primary' && css`
      color: hsl(207, 5%, 57%);
      :hover {
        color: #70C4FF;
        background-color: #F6F8F9;
      }
      div {
        border: none;
      }
  `}

  ${ ({ selected, selectType }) => (selected && selectType === 'primary') && css` color: hsl(206, 22%, 29%);` }
`;

const OptionText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  font-size: 14px;
`;

export { SelectOption, OptionText };