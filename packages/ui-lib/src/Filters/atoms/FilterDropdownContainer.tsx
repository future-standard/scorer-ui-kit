import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import ConfirmationButtons, { IConfirmationButtons } from './ConfirmationButtons';

const Container = styled.div<{ height?: string }>`
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
  background-color: var(--filter-dropdown-background-color-fallback);
  @supports( background-color: var(--filter-dropdown-background-color) ){
    background-color: var(--filter-dropdown-background-color);
  };

  backdrop-filter: blur(20px);
  border: var(--grey-6) 1px solid;
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  overflow: visible;
  padding-top: 5px;

  &::before {
    content: '';
    background-color: var(--filter-dropdown-accent);
    border-radius: 3px 3px 0 0;
    box-shadow: 0px 5px 25px 0px var(--primary-a5);

    display: block;
    height: 5px;
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    z-index: 1;
  }

`;

const Inner = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

interface IProps {
  height?: string
}

type Props = IProps & HTMLAttributes<HTMLDivElement> & IConfirmationButtons

const FilterDropdownContainer: React.FC<Props> = ({
  hasApply,
  hasReset,
  cancelText,
  applyText,
  resetText,
  onCancelCallback = () => { },
  onApplyCallback = () => { },
  onResetCallback = () => { },
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Inner>
        {children}
        {(hasApply || hasReset) && <ConfirmationButtons {...{
          hasApply,
          hasReset,
          cancelText,
          applyText,
          resetText,
          onCancelCallback,
          onApplyCallback,
          onResetCallback,
        }} />}
      </Inner>
    </Container>
  );
};

export default FilterDropdownContainer;