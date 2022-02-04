import React from 'react';
import styled from 'styled-components';
import FilterOption from '../../Form/atoms/FilterOption';
import FilterDropHandler from '../atoms/FilterDropHandler';
import LoadingBox from '../atoms/LoadingBox';
import { IFilterItem } from '../FilterTypes';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const TopLine = styled.div`
  ${({ theme }) => theme.styles.filters.dropdownContainer.topBorder};
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const InnerBox = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  border-right: solid 1px hsl(207, 16%, 86%);
  border-bottom: solid 1px hsl(207, 16%, 86%);
  border-left: solid 1px hsl(207, 16%, 86%);
  background-color: hsl(200, 23%, 97%);
`;

const StyledFilterOption = styled(FilterOption)`
  letter-spacing: 0.2px;
`;

const OptionList = styled.div`
  ${StyledFilterOption} {
    height: 35px;
    padding-left: 10px;
  }
`;

export interface ISortDropdown {
  buttonText: string
  list: IFilterItem[]
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
  isSortAscending?: boolean
  minWidthBtn?: number
  selected: IFilterItem
  onSelect: (newSelection: IFilterItem) => void
}

const SortDropdown: React.FC<ISortDropdown> = ({
  buttonText,
  disabled,
  list,
  isLoading,
  loadingText,
  isSortAscending = true,
  selected,
  minWidthBtn,
  onSelect,
  ...props }) => {
  return (
    <Container {...props}>
      <FilterDropHandler
        {...{ buttonText, disabled, isSortAscending }}
        minWidth={minWidthBtn}
        buttonIcon='FilterSorting'
      >
        <TopLine />
        <InnerBox>
          {(isLoading || list.length === 0)
            ? (
              <LoadingBox {...{ loadingText }} />
            )
            : (
              <OptionList>
                {list.map((item, index) => {
                  return (
                    <StyledFilterOption
                      key={index}
                      title={item.text}
                      optionType='radio'
                      selected={selected.value === item.value}
                      onClick={() => onSelect(item)}
                      value={item.value}
                    />
                  );
                })}
              </OptionList>
            )}
        </InnerBox>
      </FilterDropHandler>

    </Container>
  );
};

export default SortDropdown;