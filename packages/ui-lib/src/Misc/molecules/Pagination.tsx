import React, { ChangeEvent, HTMLAttributes, useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TextField from '../../Form/molecules/TextField';
import Button from '../../Form/atoms/Button';
import Label from '../../Form/atoms/Label';
import Icon from '../../Icons/Icon';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: fit-content;
  margin-right: 10px;
  white-space: nowrap;
  gap: 0 16px;
  vertical-align: baseline;
`;

const PageLabel = styled.label`
  font-family: var( --font-ui);
  font-size: 12px;
  font-weight: 500;
  color: #808080;
  cursor: pointer;
  text-align: center;
  margin: 23px 0 10px 0;
`;

const TextFieldStyled = styled(TextField)<{ textColor: string; shouldShake: boolean }>`
  max-width: 150px;
  color: ${({ textColor }) => textColor};
  animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -moz-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -webkit-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
  -o-animation: ${({ shouldShake }) => (shouldShake ? shakeAnimation : 'none')} 150ms 2 linear;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const TextFieldWrapper = styled.div`
  & label > div > div:nth-child(2){
    display: none;
  }
`;

const GoButtonContainer = styled.div<{count: number}>`
  z-index: 0;
  margin-top: 24px;
  display: flex;
  margin-left: ${({ count }) => count <= 9 ? '-55px' : count <= 99 && count >= 10 ? '-63px' : '-72px'};
`;

const GoButton = styled(Button)<{language: string}>`
  margin-left: ${({ language }) => language === 'ja' ? '9px' : '6px'};
  margin-top: -2px;
  width: 30px;
  height: 20px;
  border-radius: 3px;
  padding: ${({ language }) => language === 'ja' ? '1px' : '2px'};
  &:focus {
    outline: 2px solid #838383;
  }
`;

const StaticPageCount = styled(Label)<{language: string}>`
  margin-left: -33px;
  color: #808080;
`;

const ArrowWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  margin-top: 10px;
  margin-left: 16px;
`;

const ArrowContainer = styled.div<{active: boolean}>`
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px  rgb(71, 73, 76);
  background-color: rgb(44, 46, 48);
  pointer-events: ${({ active }) => active ? 'auto' : 'none'};
  opacity: ${({ active }) => active ? '1' : '0.5'};
`;

interface OwnProps {
  pageText?: string,
  totalPages: number,
  defaultPage?: number,
  language?: 'en' | 'ja',
  buttonText?: string
  onPageChange: (page: number) => void
}

type IPagination = OwnProps & HTMLAttributes<HTMLDivElement>

const Pagination: React.FC<IPagination> = (props) => {
  const {
    pageText = 'Page:',
    totalPages = 199,
    defaultPage = 1,
    language = 'ja',
    buttonText = 'GO',
    onPageChange
  } = props;

  const [fieldState, setFieldState] = useState<string>('');
  const [pageValue, setPageValue] = useState<string>(defaultPage.toString());
  const [disableGO, setDisabledGo] = useState<boolean>(parseInt(pageValue) > totalPages && fieldState !== '' ? false : true);
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const [activePage, setActivePage] = useState(parseInt(pageValue));

  const handleInputClick = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setShouldShake(false);
    if(value.length <= 4) {
      const numericValue = parseInt(value, 10);
      if (numericValue <= totalPages && numericValue > 0) {
        setPageValue(value);
        setFieldState('');
        setDisabledGo(false);
      } else {
        setFieldState('#f66');
        setDisabledGo(true);
        setShouldShake(true);
      }
      if(numericValue !== 0) {
        setPageValue(value === '' ? '' : value);
      } else {
        setPageValue('1');
      }
      setFieldState(numericValue > totalPages || value === '' ? '#f66' : '#4db5ff');
      if(value === '') {
        setDisabledGo(true);
      } else {
        setDisabledGo(numericValue > totalPages || value === '' ? true : false);
      }
    }
  },[totalPages]);

  const onBlur = useCallback(() => {
    if (pageValue === '') {
      setPageValue(activePage.toString());
      setDisabledGo(false);
      setFieldState('');
    } else if (parseInt(pageValue) > totalPages) {
      setFieldState('#f66');
    } else {
      setFieldState('');
      setDisabledGo(false);
      setActivePage(parseInt(pageValue));
    }
  }, [activePage, pageValue, totalPages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Control', 'c', 'v', 'x', 'a'];
    if (!/^\d$/.test(key) && !allowedKeys.includes(key)) {
      event.preventDefault();
    }
  };

  const onFocus = () => {
    setFieldState(parseInt(pageValue) > totalPages ? '#f66' : '#4db5ff');
    if(pageValue === '') {
      setDisabledGo(true);
      setFieldState('#f66');
    } else {
      setDisabledGo(parseInt(pageValue) > totalPages ? true : false);
    }
  };

  const getTextFieldState = useCallback(() => {
    if(fieldState === '') {
      return 'default';
    } else {
      if(pageValue === '') {
        return 'invalid';
      } else {
        if(parseInt(pageValue) > totalPages) {
          return 'invalid';
        } else {
          return 'required';
        }
      }
    }
  },[fieldState, pageValue, totalPages]);

  const onClickGo = useCallback(()=>{
    onPageChange(parseInt(pageValue));
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

  const arrowEvent = useCallback((e: any) => {
    if (e.key === 'Enter') {
      document.getElementById('goButton')?.click();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', arrowEvent);
    return () => {
      window.removeEventListener('keydown', arrowEvent);
    };
  }, [arrowEvent]);

  return (
    <PaginationContainer>
      <PageLabel>{pageText}</PageLabel>
      <TextFieldWrapper>
        <TextFieldStyled
          label=''
          name='page'
          value={pageValue}
          onChange={(e) => handleInputClick(e)}
          fieldState={getTextFieldState()}
          textColor={fieldState}
          onFocus={() => onFocus()}
          onBlur={onBlur}
          onPaste={(e) => handlePaste(e)}
          onKeyDown={handleKeyDown}
          shouldShake={shouldShake}
        />
      </TextFieldWrapper>
      <GoButtonContainer count={totalPages}>
        <StaticPageCount htmlFor='goButton' labelText={' / ' + totalPages.toString()} language={language} />
        <GoButton id='goButton' size='xsmall' design='primary' language={language} disabled={disableGO} onClick={onClickGo}>{buttonText}</GoButton>
      </GoButtonContainer>
      <ArrowWrapper>
        <ArrowContainer onClick={() => handlePageChange(activePage - 1)} active={fieldState === '' && activePage > 1}><Icon icon='Left' color='dimmed' size={15} /></ArrowContainer>
        <ArrowContainer onClick={() => handlePageChange(activePage + 1)} active={fieldState === '' && activePage < totalPages}><Icon icon='Right' color='dimmed' size={15} /></ArrowContainer>
      </ArrowWrapper>
    </PaginationContainer>
  );
};

export default Pagination;