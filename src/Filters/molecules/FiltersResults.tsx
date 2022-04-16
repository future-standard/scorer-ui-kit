import React from 'react';
import styled, { css } from 'styled-components';
import { IFilterItem, IFilterType } from '../FilterTypes';
import { resetButtonStyles } from '../../common/index';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { isFilterItem } from '../FilterTypes';
import { DateInterval, isDateInterval } from './DatePicker';
import { format } from 'date-fns';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const ResultsTextWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: hsl(207, 5%, 57%);
`;

const FilterLabel = styled.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: hsl(207, 5%, 57%);

  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.data};
  `};

  ${IconWrapper} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid hsla(0, 0%, 13%, 0.16);
`;
const FilterLabelText = styled.div<{ hasIcon?: boolean }>`
  padding: ${({ hasIcon }) => hasIcon ? '0 15px 2px 9px' : '0 15px 2px 0'};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`;

const ClearTextButton = styled.button`
  ${resetButtonStyles};
  font-family: ${({ theme }) => theme.fontFamily.data};
  color: hsl(216, 4%, 77%);
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
      ? `${filterName}: ${format(item.start, resultsDateFormat)} - ${format(item.end, resultsDateFormat)}`
      : `${filterName}: ${item.start.toDateString()} - ${item.end.toDateString()}`;
  } else if (!filterName && isFilterItem(item)) {
    textLabel = item.text;
  } else if (!filterName && item instanceof Date) {
    textLabel = isDateFormatValid
      ? format(item, resultsDateFormat)
      : item.toDateString();
  } else if (!filterName && isDateInterval(item)) {
    textLabel = isDateFormatValid
      ? `${format(item.start, resultsDateFormat)} - ${format(item.end, resultsDateFormat)}`
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