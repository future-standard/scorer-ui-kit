import React, { TextareaHTMLAttributes } from 'react'
import styled, { css } from  'styled-components';

const Container =  styled.div``;

const StyledTextarea = styled.textarea`
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  ${({theme}) => css`
  font-family: ${theme.fontFamily.data};
  `};

  ${({theme: {typography}}) => css`
  ${typography.form.input.value.normal};
  &::placeholder {
    ${typography.form.input.placeholder.normal};
  }
`};
`;

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea : React.FC<Props> = ({
  placeholder ='',
  children,
  ...props
}) => {
  return (
    <Container>
      <StyledTextarea
        placeholder={placeholder}
        {...props}
      >{children}</StyledTextarea>
    </Container>
  );
}

export default TextArea;