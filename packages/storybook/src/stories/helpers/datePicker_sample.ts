import { IDateInterval } from "scorer-ui-kit";

const TODAY: Date = new Date();
const TOMORROW: Date = new Date();
TOMORROW.setDate(TODAY.getDate() +1);
const TWO_WEEKS_BEFORE: Date = new Date();
TWO_WEEKS_BEFORE.setDate(TODAY.getDate() - 15);

// Selected example
const InitialSelectedDate: IDateInterval = {
  start: TWO_WEEKS_BEFORE,
  end: TOMORROW
}

const START_RANGE: Date = new Date();
START_RANGE.setDate(0);
START_RANGE.setDate(START_RANGE.getDate() - 20);
const END_RANGE: Date = new Date();
END_RANGE.setDate(1);
END_RANGE.setDate(END_RANGE.getDate() + 60);

const datesRange = {
  start: START_RANGE,
  end: END_RANGE
}

const getContentDays = (): Date[] => {
  const contentDayArray: Date[] = [];
  const CONTENT_TODAY: Date = new Date();

  for (let index = 0; index < 30; index++) {
    if (index % 3 !== 0 && index <= 24) continue; // Skip non-content days

    const dayContent = new Date(CONTENT_TODAY);
    dayContent.setDate(CONTENT_TODAY.getDate() - 24 + index);

    contentDayArray.push(dayContent);
  }

  return contentDayArray;
};

const dataContentDays: Date[] = getContentDays();

export {
  InitialSelectedDate,
  datesRange,
  dataContentDays,
}