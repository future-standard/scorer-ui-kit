import React, { ChangeEvent, HTMLAttributes, useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../Form/atoms/Button';
import Icon from '../../Icons/Icon';
import { removeAutoFillStyle, resetButtonStyles } from '../../common';
import { isNotNumber } from '../../helpers';

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
  font-weight: bold;
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

const StyledInput = styled.input<{ textColor: string, maxWidth?: string}>`
  ${removeAutoFillStyle};
  color: ${({ textColor }) => textColor};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : '40px'};
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
  padding-right: ${WIDTH_PER_NUMBER/2}px;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const InputContainer = styled.div<{borderColor?: string,  shouldShake: boolean}>`
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
  ${({borderColor}) => borderColor && `border: 1px solid ${borderColor}`};
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

const ArrowButton = styled.button<{active: boolean}>`
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


interface OwnProps {
  pageText?: string,
  totalPages: number,
  defaultPage?: number,
  buttonText?: string
  onPageChange: (page: number) => void
}

type IPagination = OwnProps & HTMLAttributes<HTMLDivElement>

const Pagination: React.FC<IPagination> = (props) => {
  const {
    pageText = 'Page:',
    totalPages = 199,
    defaultPage = 1,
    buttonText = 'GO',
    onPageChange
  } = props;

  const [fieldState, setFieldState] = useState<string>('default');
  const [pageValue, setPageValue] = useState<string>(defaultPage.toString());
  const [disableGO, setDisabledGo] = useState<boolean>(parseInt(pageValue) > totalPages && fieldState !== '' ? false : true);
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const [activePage, setActivePage] = useState(parseInt(pageValue));

  const getValidWidth = useCallback(() => {
    return `${(totalPages.toString().length * WIDTH_PER_NUMBER) + WIDTH_PER_NUMBER/2 }px`;
  },[totalPages]);


  const isValidInput =  useCallback((currentValue: string) => {

    if (isNotNumber(currentValue)) {
        return false;
      }

      // validate is inRange
      if(parseInt(currentValue) > totalPages ) {
        return false;
      }

      if(parseInt(currentValue) <= 0){
        return false;
      }

      if(currentValue === '') {
        return false;
      }

      return true;
    },[totalPages]);



  const onInputChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {

    // setShouldShake(false);
    // if(value.length <= 4) { /// why 4?
    //   const numericValue = parseInt(value, 10);
    //   if (numericValue <= totalPages && numericValue > 0) { // range of pages
    //     setPageValue(value);
    //     setFieldState('');
    //     setDisabledGo(false);
    //   } else {
    //     setFieldState('invalid');
    //     setDisabledGo(true);
    //     setShouldShake(true);
    //   }
    //   if(numericValue !== 0) {
    //     setPageValue(value === '' ? '' : value);
    //   } else {
    //     setPageValue('1');
    //   }
    //   setFieldState(numericValue > totalPages || value === '' ? 'invalid' : 'processing');
    //   if(value === '') {
    //     setDisabledGo(true);
    //   } else {
    //     setDisabledGo(numericValue > totalPages || value === '' ? true : false);
    //   }
    // }

    setShouldShake(false);
    if(isNotNumber(value)){
      return;
    }

    const validDigitValue = value.slice(-totalPages.toString().length);

    setPageValue(validDigitValue);
    if(isValidInput(validDigitValue)) {
      setFieldState('processing');
      setDisabledGo(false);

    } else {
      setFieldState('invalid');
      setDisabledGo(true);
      setShouldShake(true);
    }

  },[isValidInput, totalPages]);


/// I think this one is used to always check value after leaving
  const onBlur = useCallback(({ target: { value } }: React.FocusEvent<HTMLInputElement>) => {
    // console.log('current value of input on blur', value);
    // if (value === '') {
    //   setPageValue(activePage.toString());
    //   setDisabledGo(false);
    //   setFieldState('');
    // } else if (parseInt(value) > totalPages) {
    //   setFieldState('invalid');
    // } else {
    //   setFieldState('');
    //   setDisabledGo(false);
    //   setActivePage(parseInt(value));
    // }

    if((value === '') ) {
      setPageValue(activePage.toString());

    }else if(isValidInput(value) && parseInt(value) !== activePage) {
      setDisabledGo(false);
      setFieldState('processing');
      return;

    } else if(!isValidInput(value)) {
      setFieldState('invalid');
      setDisabledGo(true);
      return;
    }

    setFieldState('default');

  }, [activePage, isValidInput]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if ( (event.key === 'Enter') && isValidInput(pageValue) ) {
      document.getElementById('goButton')?.click();
    }
  };

  /**
   * Review if current edith is valid if not make disable
   */
  const onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => {

    if(isValidInput(value)) {
      setFieldState('processing');
    }else {
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
    },[]);

  const onClickGo = useCallback(()=>{
    setActivePage(parseInt(pageValue));
    onPageChange(parseInt(pageValue));
    setDisabledGo(true);
    setFieldState('default');

  },[onPageChange, pageValue]);

  const handlePageChange = (value: number) => {
    onPageChange(value);
    setActivePage(value);
    setPageValue(value.toString());
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboardData = e.clipboardData || (window as any).clipboardData; // Cross-browser support
    const pastedText = clipboardData.getData('text');

    if (!/^\d+$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  return (
    <PaginationContainer>
      <PageLabel htmlFor='goButton'>{pageText}</PageLabel>
      <InputContainer borderColor={getTextColor(fieldState)} shouldShake={shouldShake}>
        {/* <TextFieldStyled
          label=''
          name='page'
          value={pageValue}
          onChange={(e) => onInputChange(e)}
          fieldState={getTextFieldState()}
          textColor={fieldState}
          onFocus={() => onFocus()}
          onBlur={onBlur}
          onPaste={(e) => handlePaste(e)}
          onKeyDown={handleKeyDown}
          shouldShake={shouldShake}
        /> */}
        <StyledInput
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