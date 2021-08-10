import React, { InputHTMLAttributes } from 'react';
import styled, {css} from 'styled-components';
import Icon, {IconWrapper} from '../../Icons/Icon';

const Container = styled.div`
  ${({theme}) => css`
    border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
    height: 30px;
    padding: 2px 2px 2px 10px;
    align-items: center;
  `};
  display: flex;
  border-radius: 3px;
  ${IconWrapper} {
    flex-shrink: 0;
  }
`;

const StyledInput = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  margin-left: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({theme: {typography}}) => css`
    ${typography.form.input.value.compact};
    &::placeholder {
      ${typography.form.input.placeholder.compact};
    }
  `};
`;

interface OwnProps {

}

type ISearchInput = OwnProps & InputHTMLAttributes<HTMLInputElement>

const SearchInput : React.FC<ISearchInput> = ({...props}) => {
  return(
    <Container>
      <Icon icon='Search' color='dimmed' size={12}/>
      <StyledInput
        {...props}
      />
    </Container>
  );
};

export default SearchInput;