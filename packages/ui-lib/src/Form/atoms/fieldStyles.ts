import styled from 'styled-components';

export const FieldWrapper = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--input-invalid-border-color, #e53935);
`;

export const HintMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--primary-7);
`;
