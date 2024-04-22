import React from 'react';
import styled from 'styled-components';
import { IFilterItem, IFilterType } from '../FilterTypes';
import { resetButtonStyles } from '../../common/index';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { isFilterItem } from '../FilterTypes';
import { DateInterval, isDateInterval } from './DatePicker';
import { fontFamily } from '../../themes/common';
import { format, add, startOfDay } from 'date-fns';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`;

const ResultsTextWrapper = styled.div`
  font-family: ${fontFamily.ui};
  color: var(--grey-9);
`;

const FilterLabel = styled.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: var(--grey-9);
  font-family: ${fontFamily.data};

  ${IconWrapper} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid var(--grey-8);
`;
const FilterLabelText = styled.div<{ hasIcon?: boolean }>`
  padding: ${({ hasIcon }) => hasIcon ? '0 15px 0 9px' : '0 15px 0 0'};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`;

const ClearTextButton = styled.button`
  ${resetButtonStyles};
  font-family: ${fontFamily.data};
  color: var(--grey-10);
  margin-left: 11px;
  font-size: 12px;
`;

const RemoveButton = styled.button`
  ${resetButtonStyles};
`;

const FilterLabelsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`;

/**
 * Date from Datepicker, since it does not support seconds input, we assumed that 23:59:59 value is showing 24:00 in display
 * Here is not changing the value that the developer receives, just displaying 00:00 of the next Day
 */

const validWithMidnight = (endDate: Date, resultsDateFormat: string) =>  {

  if (endDate.getHours() === 23 && endDate.getSeconds() > 0) {
  return format( add(startOfDay(endDate), {days:1}), resultsDateFormat);
  }

  return format(endDate, resultsDateFormat);
};

const validateDateFormat = (resultsDateFormat: string): boolean => {
  let isFormatValid = false;

  if (resultsDateFormat !== '') {
    try {
      const tryDate = new Date();
      format(tryDate, resultsDateFormat);
      isFormatValid = true;
    } catch (error) {
      isFormatValid = false;
    }
  }

  return isFormatValid;
};

const renderResults = (template: string, total: number) => {
  return template.replace('[TOTAL_RESULTS]', `${total}`);
};


const renderLabel = (item: IFilterItem | DateInterval | Date, resultsDateFormat: string, icon?: string, filterName?: string) => {

  let textLabel: string = "";
  const isDateFormatValid = validateDateFormat(resultsDateFormat);

  if (filterName && isFilterItem(item)) {
    textLabel = `${filterName}: ${item.text}`;
  } else if (filterName && item instanceof Date) {
    textLabel = isDateFormatValid
      ? `${filterName}: ${format(item, resultsDateFormat)}`
      : `${filterName}: ${item.toDateString()}`;
  } else if (filterName && isDateInterval(item)) {
    textLabel = isDateFormatValid
      ? `${filterName}: ${format(item.start, resultsDateFormat)} - ${validWithMidnight(item.end, resultsDateFormat)}`
      : `${filterName}: ${item.start.toDateString()} - ${item.end.toDateString()}`;
  } else if (!filterName && isFilterItem(item)) {
    textLabel = item.text;
  } else if (!filterName && item instanceof Date) {
    textLabel = isDateFormatValid
      ? format(item, resultsDateFormat)
      : item.toDateString();
  } else if (!filterName && isDateInterval(item)) {
    textLabel = isDateFormatValid
      ? `${format(item.start, resultsDateFormat)} - ${validWithMidnight(item.end, resultsDateFormat)}`
      : `${item.start.toDateString()} - ${item.end.toDateString()}`;
  }

  return <FilterLabelText hasIcon={!!icon}>{textLabel}</FilterLabelText>;
};

export interface IFilterLabel {
  filterId: string
  item: IFilterItem | Date | DateInterval
  type: IFilterType
  icon?: string
  filterName?: string
}

interface IFilterResults {
  labelLists: IFilterLabel[]
  totalResults: number
  resultTextTemplate?: string
  clearText?: string
  resultsDateFormat?: string
  onRemoveFilter?: (filterId: string, type: IFilterType, item: IFilterItem | Date | DateInterval) => void
  onClearAll?: () => void
}

const FiltersResults: React.FC<IFilterResults> = ({
  labelLists,
  totalResults,
  resultTextTemplate = 'Showing Results ([TOTAL_RESULTS]):',
  clearText = 'CLEAR ALL',
  resultsDateFormat = '',
  onRemoveFilter = () => { },
  onClearAll = () => { },
  ...props
}) => {
  return (
    <Container {...props}>
      <ResultsTextWrapper>{renderResults(resultTextTemplate, totalResults)}</ResultsTextWrapper>
      <FilterLabelsGroup>
        {labelLists.map(({ icon, item, filterName, filterId, type }, index) => {
          return (
            <FilterLabel key={`Filter-Label-id-${index}`}>
              {icon && <Icon icon={icon} color='dimmed' size={10} weight='light' />}
              {renderLabel(item, resultsDateFormat, icon, filterName)}
              <RemoveButton
                onClick={() => onRemoveFilter(filterId, type, item)}
              >
                <Icon icon='CloseCompact' color='dimmed' size={10} weight='light' />
              </RemoveButton>
            </FilterLabel>
          );
        })}
        {(labelLists.length > 0) && <ClearTextButton onClick={onClearAll}>{clearText}</ClearTextButton>}
      </FilterLabelsGroup>

    </Container>
  );
};

export default FiltersResults;