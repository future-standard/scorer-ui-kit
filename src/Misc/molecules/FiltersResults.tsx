import React from 'react';
import styled, { css } from 'styled-components';
import { ISelectItem, resetButtonStyles } from '../..';
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
const FilterLabelText = styled.div`
  padding: 0 15px 0 9px;

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
  align-items: center;
  margin-left: 10px;
`;

const renderResults = (template: string, total: number) => {
  return template.replace('[TOTAL_RESULTS]', `${total}`);
};

interface IFilterLabel {
  filterId: string
  item: ISelectItem,
  icon?: string,
  filterName?: string
}
interface IFilterResults {
  labelLists: IFilterLabel[]
  totalResults: number
  resultTextTemplate?: string
  clearText?: string
  onRemoveFilter: (filterId: string, item: ISelectItem) => void
  onClearAll?: () => void
}

const FiltersResults: React.FC<IFilterResults> = ({
  labelLists,
  totalResults,
  resultTextTemplate = 'Showing Results ([TOTAL_RESULTS]):',
  clearText = 'CLEAR ALL',
  onRemoveFilter,
  onClearAll = () => { },
}) => {
  return (
    <Container>
      <ResultsTextWrapper>{renderResults(resultTextTemplate, totalResults)}</ResultsTextWrapper>
      <FilterLabelsGroup>
        {labelLists.map(({ icon, item, filterName, filterId }, index) => {
          return (
            <FilterLabel key={`Filter-Label-id-${index}`}>
              {icon && <Icon icon={icon} color='dimmed' size={10} weight='heavy' />}
              <FilterLabelText>{filterName ? `${filterName}: ${item.text}` : item.text}</FilterLabelText>
              <RemoveButton
                onClick={() => onRemoveFilter(filterId, item)}
              >
                <Icon icon='CloseCompact' color='dimmed' size={10} weight='heavy' />
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