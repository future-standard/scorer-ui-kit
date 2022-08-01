import React, { FormHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { StyledLabel } from './atoms/Label';

const FormContainer = styled.form<{spacing: string}>`
  ${({spacing})=> spacing && css`
      & >  ${StyledLabel} {
        margin-bottom: ${spacing};
      }
  `}
`;

interface OwnProps {
  spacing?: string;
}

type Props = OwnProps & FormHTMLAttributes<HTMLFormElement>

const Form : React.FC<Props> = ({ children, spacing = '45px;' ,...props }) => {
  return (
    <FormContainer spacing={spacing} {...props}>
      {children}
    </FormContainer>
  );
};

export default Form;