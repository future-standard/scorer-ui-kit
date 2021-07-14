import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import Label from './Label';

const Container = styled.div``;
const StyledSelect = styled.select``;

interface ILabel {
  htmlFor: string
  labelText: string
}

interface OwnProps {
  labelProps?: ILabel
}

type ISelect = OwnProps & SelectHTMLAttributes<HTMLSelectElement>

const SelectField: React.FC<ISelect> = ({ labelProps, children, ...props }) => {

  const renderSelect = () => (
    <StyledSelect {...props}>
      {children}
    </StyledSelect>
  );

  return (
    <Container>
      {labelProps
      ? (
        <Label {...labelProps}>
          {renderSelect()}
        </Label>
        )
      : renderSelect()}
    </Container>
  );
};

export default SelectField;