import React, { ChangeEvent, HTMLAttributes, useCallback, useState, useRef, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../Form/atoms/Button';
import Icon from '../../Icons/Icon';
import { removeAutoFillStyle, resetButtonStyles } from '../../common';
import { isNotNumber } from '../../helpers';
import SelectField, { SelectWrapper } from '../../Form/atoms/SelectField';

const WIDTH_PER_NUMBER = 12;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: fit-content;
  margin-right: 10px;
  white-space: nowrap;
  gap: 0 8px;
  vertical-align: baseline;
`;

const PageLabel = styled.label`
  font-family: var(--font-ui);
  font-weight: 500px;
  font-size: 14px;
  color: var(--grey-10);
  text-align: left;
`;

const StaticPageCount = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`;

const StyledInput = styled.input<{ textColor: string, maxWidth?: string }>`
  ${removeAutoFillStyle};
  color: ${({ textColor }) => textColor};
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '40px'};
  font-family: var(--font-data);
  height: 100%;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  border: none;
  padding-right: ${WIDTH_PER_NUMBER / 2}px;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const InputContainer = styled.div<{ borderColor?: string, shouldShake: boolean }>`
  height: var(--input-height, 40px);
  animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -moz-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -webkit-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -o-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
`;

const GoButton = styled(Button)`
  max-width: 50px;
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  gap: 0 8px;
`;

const ArrowButton = styled.button<{ active: boolean }>`
  ${resetButtonStyles};
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px var(--input-border-default, --grey-9);
  background-color: var(grey-2);
  pointer-events: ${({ active }) => active ? 'auto' : 'none'};
  opacity: ${({ active }) => active ? '1' : '0.5'};

  &:focus, &:hover {
    outline: 2px solid #838383;
  }
`;

const ItemsSelectWrapper = styled.div<{ width: string }>`
  ${SelectWrapper} {
    width: ${({ width }) => width ? width : `60px`};
  }
    margin-right: 35px;
`;

export interface IItemsOption {
  value: number
  textValue: string
}

interface OwnProps {
  pageText?: string
  totalPages: number
  activePage?: number
  buttonText?: string
  itemsText?: string
  selectWidth?: string
  selectDisabled?: boolean
  itemsOptions: IItemsOption[]
  onPageChange: (page: number) => void
  onItemsChange: (items: number) => void
}

export type IPagination = OwnProps & HTMLAttributes<HTMLDivElement>

const Pagination: React.FC<IPagination> = (props) => {
  const {
    pageText = 'Page:',
    totalPages = 199,
    activePage = 1,
    buttonText = 'GO',
    itemsText = 'Items Per Page',
    selectWidth = '60px',
    selectDisabled = false,
    itemsOptions = [],
    onPageChange,
    onItemsChange,
  } = props;

  const [fieldState, setFieldState] = useState<string>('default');
  const [pageValue, setPageValue] = useState<string>(activePage.toString());
  const [disableGO, setDisabledGo] = useState<boolean>(parseInt(pageValue) > totalPages && fieldState !== '' ? false : true);
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getValidWidth = useCallback(() => {
    return `${(totalPages.toString().length * WIDTH_PER_NUMBER) + WIDTH_PER_NUMBER / 2}px`;
  }, [totalPages]);


  const isValidInput = useCallback((value: string) => {

    if (isNotNumber(value)) {
      return false;
    }

    if (parseInt(value) > totalPages) {
      return false;
    }

    if (parseInt(value) <= 0) {
      return false;
    }

    if (value === '') {
      return false;
    }

    return true;
  }, [totalPages]);


  const onInputChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {

    setShouldShake(false);
    if (isNotNumber(value)) {
      return;
    }

    // max total digits, without left zeros or empty value
    const validDigitValue = value === '' ? '' : Number(value.slice(-totalPages.toString().length)).toString();

    setPageValue(validDigitValue);
    if (isValidInput(validDigitValue)) {
      setFieldState('processing');
      setDisabledGo(false);

    } else {
      setFieldState('invalid');
      setDisabledGo(true);
      setShouldShake(true);
    }

  }, [isValidInput, totalPages]);


  const onBlur = useCallback(({ target: { value } }: React.FocusEvent<HTMLInputElement>) => {

    if ((value === '')) {
      setPageValue(activePage.toString());

    } else if (isValidInput(value) && parseInt(value) !== activePage) {
      setDisabledGo(false);
      setFieldState('processing');
      return;

    } else if (!isValidInput(value)) {
      setFieldState('invalid');
      setDisabledGo(true);
      return;
    }

    setFieldState('default');

  }, [activePage, isValidInput]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if ((event.key === 'Enter') && isValidInput(pageValue)) {
      onClickGo();
    }

  };

  /**
   * Review if current edith is valid if not make disable
   */
  const onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => {

    if (isValidInput(value)) {
      setFieldState('processing');
    } else {
      setFieldState('invalid');
      setDisabledGo(true);
    }

  };

  const getTextColor = useCallback((state: string): string => {

    switch (state) {
      case 'processing':
        return 'var(--input-border-processing, #4db5ff)';
        break;

      case 'invalid':
        return 'var(--input-border-invalid, #f66)';

      case 'default':
      default:
        return 'var(--input-border-default, --grey-9)';
    }

  }, []);

  const onClickGo = useCallback(() => {

    onPageChange(parseInt(pageValue));
    inputRef.current && inputRef.current.blur();
    setDisabledGo(true);
    setFieldState('default');

  }, [onPageChange, pageValue]);

  const handlePageChange = (value: number) => {
    onPageChange(value);
    setPageValue(value.toString());
  };

  const onItemsSelectChange = useCallback((value: string) => {
    onItemsChange(Number(value));
  }, [onItemsChange]);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboardData = e.clipboardData || (window as any).clipboardData; // Cross-browser support
    const pastedText = clipboardData.getData('text');

    if (!/^\d+$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  return (
    <PaginationContainer>
      <ItemsSelectWrapper width={selectWidth}>
        <SelectField
          disabled={selectDisabled}
          label={{ htmlFor: 'paginationPages', text: itemsText, isSameRow: true }}
          defaultValue={1}
          changeCallback={onItemsSelectChange}
          marginBottom={false}
        >
          <Fragment>
            {itemsOptions.map(({ value, textValue }, index) =>
              <option key={index} value={value}>{textValue}</option>
            )}
          </Fragment>
        </SelectField>
      </ItemsSelectWrapper>
      <PageLabel htmlFor='goButton'>{pageText}</PageLabel>
      <InputContainer borderColor={getTextColor(fieldState)} shouldShake={shouldShake}>
        <StyledInput
          ref={inputRef}
          value={pageValue}
          onChange={(e) => onInputChange(e)}
          textColor={getTextColor(fieldState)}
          onFocus={(e) => onFocus(e)}
          onBlur={(e) => onBlur(e)}
          onPaste={(e) => handlePaste(e)}
          onKeyDown={handleKeyDown}
          maxWidth={getValidWidth()}
        />
        <StaticPageCount>{'/' + '\u00A0' + totalPages.toString()}</StaticPageCount>
        <GoButton id='goButton' size='small' design='primary' disabled={disableGO} onClick={onClickGo}>{buttonText}</GoButton>
      </InputContainer>

      <ArrowWrapper>
        <ArrowButton
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage <= 1}
          active={fieldState === 'default' && activePage > 1}>
          <Icon icon='Left' color='dimmed' size={8} />
        </ArrowButton>
        <ArrowButton
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage >= totalPages}
          active={fieldState === 'default' && activePage < totalPages}>
          <Icon icon='Right' color='dimmed' size={8} />
        </ArrowButton>
      </ArrowWrapper>
    </PaginationContainer>
  );
};

export default Pagination;