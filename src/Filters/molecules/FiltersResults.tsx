import React from 'react';
import styled, { css } from 'styled-components';
import { IFilterItem, IFilterType } from '../index';
import {resetButtonStyles} from '../../common/index';
import Icon, { IconWrapper } from '../../Icons/Icon';

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
  margin: 0 0 3px 3px;
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
const FilterLabelText = styled.div<{hasIcon?: boolean}>`
  padding: ${({hasIcon}) => hasIcon ? '0 15px 0 9px' :'0 15px 0 0' };
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

const renderResults = (template: string, total: number) => {
  return template.replace('[TOTAL_RESULTS]', `${total}`);
};

export interface IFilterLabel {
  filterId: string
  item: IFilterItem
  type: IFilterType
  icon?: string
  filterName?: string
}

interface IFilterResults {
  labelLists: IFilterLabel[]
  totalResults: number
  resultTextTemplate?: string
  clearText?: string
  onRemoveFilter? : (filterId: string, type: IFilterType, item: IFilterItem) => void
  onClearAll?: () => void
}

const FiltersResults: React.FC<IFilterResults> = ({
  labelLists,
  totalResults,
  resultTextTemplate = 'Showing Results ([TOTAL_RESULTS]):',
  clearText = 'CLEAR ALL',
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
              <FilterLabelText hasIcon={!!icon}>{filterName ? `${filterName}: ${item.text}` : item.text}</FilterLabelText>
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