import {
  type ButtonHTMLAttributes,
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import type { TypeButtonDesigns } from '..';

const StyledButton = styled.button<{ $noBorderTop?: boolean }>`
  ${resetButtonStyles}
  ${({ $noBorderTop }) =>
    $noBorderTop
      ? `border-top: none`
      : css`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${IconWrapper} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({ $noBorderTop }) =>
      $noBorderTop
        ? `border-top: none`
        : css`
          border-top: 1px solid var(--border-active-color)`};

    ${IconWrapper} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`;

const OptionText = styled.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TextWrapper = styled.div<{ $textMaxWidth?: string }>`
  ${({ $textMaxWidth }) => $textMaxWidth && css`max-width: ${$textMaxWidth};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const LeftIconWrapper = styled.div<{ $isAscendingIcon: boolean }>`
  ${({ $isAscendingIcon }) =>
    $isAscendingIcon &&
    css`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--button-icon-size);
      width: var(--button-icon-size);
      g, path {
        stroke: var(--white-a10);
      }
    }
  }
`;

export interface IMOption {
  text: string;
  icon?: string;
  hasOnSelectLoading?: boolean;
  design?: TypeButtonDesigns | string;
  noBorderTop?: boolean;
  textMaxWidth?: string;
  onClickCallback?: () => void;
  closeCallback: () => void;
}

export type ISplitButtonOption = IMOption & ButtonHTMLAttributes<HTMLButtonElement>;

const SplitButtonOption: FC<ISplitButtonOption> = ({
  text,
  icon = '',
  design = 'primary',
  noBorderTop = false,
  textMaxWidth = '',
  onClickCallback,
  closeCallback,
  hasOnSelectLoading,
  children,
  formAction,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [iconSize, setIconSize] = useState<number>(0);

  const handleClick = useCallback(() => {
    onClickCallback?.();

    if (hasOnSelectLoading) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        closeCallback();
      }, 2000);
    } else {
      setTimeout(() => {
        closeCallback();
      }, 200);
    }
  }, [closeCallback, hasOnSelectLoading, onClickCallback]);

  useEffect(() => {
    if (buttonRef.current) {
      setIconSize(
        parseInt(getComputedStyle(buttonRef.current).getPropertyValue('--button-icon-size'), 10)
      );
    }
  }, []);

  return (
    <StyledButton ref={buttonRef} $noBorderTop={noBorderTop} onClick={handleClick} {...props}>
      <LeftIconWrapper $isAscendingIcon={icon === 'FilterAscending'}>
        {isLoading ? (
          <Spinner custom={{ size: iconSize }} styling={design} />
        ) : (
          <Icon icon={icon} />
        )}
      </LeftIconWrapper>
      <TextWrapper $textMaxWidth={textMaxWidth}>
        <OptionText>{text}</OptionText>
      </TextWrapper>
    </StyledButton>
  );
};

export default SplitButtonOption;
