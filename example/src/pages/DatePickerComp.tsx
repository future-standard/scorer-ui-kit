import React, { useState } from "react";
import {
  Content,
  DatePicker,
  FilterDropdownContainer,
  Switch,
} from "scorer-ui-kit";
import styled from "styled-components";

const TranslateBox = styled.div`
  margin: 20px 0;
`;

const DatePickerComp = () => {
  const [translate, setTranslate] = useState(false);

  const japMonths: string[] = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  const japDays: string[] = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <Content>
      <TranslateBox>
        <Switch
          checked={translate}
          labelText="Translate"
          leftTheme="off"
          onChangeCallback={() => {
            setTranslate(!translate);
          }}
          rightTheme="on"
          state="default"
        />
      </TranslateBox>
      <FilterDropdownContainer>
        <DatePicker
          dateMode="interval"
          dateTimeTextLower="To"
          dateTimeTextUpper="From"
          timeMode="interval"
          timeZoneTitle="Timezone"
          timeZoneValueTitle="JST"
          updateCallback={() => { }}
          monthsList={translate ? japMonths : []}
          daysList={translate ? japDays : undefined}
        />
      </FilterDropdownContainer>
    </Content>
  );
};

export default DatePickerComp;
