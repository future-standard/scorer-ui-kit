import React from 'react';
import styled from 'styled-components';
import Button from '../../Form/atoms/Button';

const FooterContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid var(--grey-6);
  background: var(--grey-a2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`;

const FooterLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface OwnProps {
  onReset?: () => void
  onCancel?: () => void
  onApply?: () => void
}

export interface IFilterFooterControls {
  resetText?: string
  cancelText?: string
  closeText?: string
  applyText?: string
  hasReset?: boolean
  hasApply?: boolean
  disableApply?: boolean
  disableReset?: boolean
}

type IFooterControls = OwnProps & IFilterFooterControls

const FooterControls: React.FC<IFooterControls> = ({
  resetText = 'Reset',
  cancelText = 'Cancel',
  closeText = 'Close',
  applyText = 'Apply',
  hasReset = false,
  hasApply = false,
  disableApply = false,
  disableReset = true,
  onReset = () => { },
  onCancel = () => { },
  onApply = () => { },
}) => {
  return (
    <FooterContainer>
      <FooterLeftSection>
        {hasReset && <Button size='small' disabled={disableReset} onClick={onReset}>{resetText}</Button>}
      </FooterLeftSection>
      {hasApply && (
        <FooterRightSection>
          <Button size='small' design='secondary' onClick={onCancel}>{disableApply ? closeText : cancelText }</Button>
          <Button size='small' onClick={onApply} disabled={disableApply}>{applyText}</Button>
        </FooterRightSection>
      )}
    </FooterContainer>
  );
};

export default FooterControls;