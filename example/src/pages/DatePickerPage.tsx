import React, { useState } from "react";
import {
  Button,
  Content,
  DatePicker,
  FilterDropdownContainer
} from "scorer-ui-kit";
import styled from "styled-components";

const TranslateBox = styled.div`
  margin: 20px 0;
`;

const DatePickerPage = () => {
  const [translate, setTranslate] = useState(false);

  const jpMonths: string[] = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

  const jpDays: string[] = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <Content>
      <TranslateBox>
        <Button onClick={() => setTranslate(!translate)}>{translate ? '言語を変更する' : 'Change Language'}</Button>
      </TranslateBox>
      <FilterDropdownContainer>
        <DatePicker
          dateMode="interval"
          dateTimeTextLower={translate ? "まで" : "To"}
          dateTimeTextUpper={translate ? "から" : "From"}
          timeMode="interval"
          timeZoneTitle={translate ? "時間帯" : "Timezone"}
          timeZoneValueTitle="JST"
          updateCallback={() => { }}
          monthsList={translate ? jpMonths : []}
          daysList={translate ? jpDays : undefined}
        />
      </FilterDropdownContainer>
    </Content>
  );
};

export default DatePickerPage;
