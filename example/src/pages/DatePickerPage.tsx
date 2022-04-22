import React, { useCallback, useState } from 'react';
import {
  ButtonWithIcon,
  Content,
  DatePicker,
  FilterDropdownContainer
} from 'scorer-ui-kit';
import styled from 'styled-components';

const TranslateBox = styled.div`
  margin: 20px 0;
`;

const DatePickerPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ja');

  const jpMonths: string[] = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  const jpDays: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  
  const onChangeLanguage = useCallback(() => { 
    if (selectedLanguage === 'ja') {
      setSelectedLanguage('en');
    } else {
      setSelectedLanguage('ja');
    }
  }, [selectedLanguage]);

  return (
    <Content>
      <TranslateBox>
        <ButtonWithIcon icon='Language' position='left' onClick={onChangeLanguage}>
          {selectedLanguage === 'ja' ? 'Japanese' : 'English'}
        </ButtonWithIcon>
      </TranslateBox>
      <FilterDropdownContainer>
        <DatePicker
          dateMode='interval'
          dateTimeTextLower={selectedLanguage === 'ja' ? 'まで' : 'To'}
        dateTimeTextUpper={selectedLanguage === 'ja'? 'から' : 'From'}
          timeMode='interval'
        timeZoneTitle={selectedLanguage === 'ja'? '時間帯' : 'Timezone'}
          timeZoneValueTitle='JST'
          updateCallback={() => { }}
        monthsList={selectedLanguage === 'ja'? jpMonths : []}
        daysList={selectedLanguage === 'ja'? jpDays : undefined}
        />
      </FilterDropdownContainer>
    </Content>
  );
};

export default DatePickerPage;
