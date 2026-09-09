import type React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../Form/atoms/Button';
import ButtonWithIcon, { type IButtonWithIcon } from '../../Form/atoms/ButtonWithIcon';

const Container = styled.div``;
const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftButtons = styled.div<{ $actionsLayout: IActionsBar['actionsLayout'] }>`
  display: flex;
  gap: 10px;

  ${({ $actionsLayout }) =>
    $actionsLayout === 'stack'
      ? css`
    flex-direction: column;
    align-items: flex-start;
  `
      : css`
    flex-wrap: wrap;
  `}
`;

const RightButtons = styled.div`
  flex-shrink: 0;
`;

const SelectedResults = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-top: 29px;
  min-height: 19px;
  color: var(--grey-10);
  font-size: 12px;
`;

const renderSelected = (template: string, selected: number, total: number) => {
  const newSelected = template.replace('[SELECTED]', `${selected}`);
  return newSelected.replace('[TOTAL]', `${total}`);
};

export interface IActionsButton extends IButtonWithIcon {
  /** label shown on the action button */
  text: string;
}

export interface IActionsBar {
  /** heading shown above the buttons */
  title?: string;
  /** label of the right hand side button that ends the selection */
  finishTextButton?: string;
  /** action buttons shown on the left, defaulting to secondary, normal size, left icon */
  actionButtons?: IActionsButton[];
  /** lay the left action buttons out in a row, or one per line */
  actionsLayout?: 'inline' | 'stack';
  /** count line below the buttons, with [SELECTED] and [TOTAL] replaced */
  selectedTemplate?: string;
  /** number of currently selected items */
  totalSelected?: number;
  /** number of items available to select */
  totalAvailable?: number;
  /** called when the finish button is clicked */
  finishCallback?: () => void;
}

const ActionsBar: React.FC<IActionsBar> = ({
  title = 'Actions:',
  finishTextButton = 'Finish',
  actionButtons = [],
  actionsLayout = 'inline',
  selectedTemplate = 'Selected [SELECTED] of [TOTAL] Results',
  totalSelected = 0,
  totalAvailable = 0,
  finishCallback = () => {},
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsWrapper>
        <LeftButtons $actionsLayout={actionsLayout}>
          {actionButtons.map(({ design, size, position, text, ...props }) => {
            return (
              <ButtonWithIcon
                key={text}
                design={design || 'secondary'}
                size={size || 'normal'}
                position={position || 'left'}
                {...props}
              >
                {text}
              </ButtonWithIcon>
            );
          })}
        </LeftButtons>
        <RightButtons>
          <Button onClick={finishCallback}>{finishTextButton}</Button>
        </RightButtons>
      </ButtonsWrapper>
      <SelectedResults>
        {renderSelected(selectedTemplate, totalSelected, totalAvailable)}
      </SelectedResults>
    </Container>
  );
};

export default ActionsBar;
