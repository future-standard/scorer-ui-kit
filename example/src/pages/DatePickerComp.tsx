import React, { useState } from "react";
import {
  Content,
  DatePicker,
  FilterDropdownContainer,
  Switch,
} from "scorer-ui-kit";
import styled from "styled-components";
import { IMonthsList } from "../../../dist/Filters/molecules/DatePicker";

const TranslateBox = styled.div`
  margin: 20px 0;
`;

const DatePickerComp = () => {
  const [translate, setTranslate] = useState(false);

  const monthsList: IMonthsList = {
    January: "1月",
    February: "2月",
    March: "3月",
    April: "4月",
    May: "5月",
    June: "6月",
    July: "7月",
    August: "8月",
    September: "9月",
    October: "10月",
    November: "11月",
    December: "12月",
  };

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
          updateCallback={() => {}}
          monthsList={translate ? monthsList : undefined}
        />
      </FilterDropdownContainer>
    </Content>
  );
};

export default DatePickerComp;
