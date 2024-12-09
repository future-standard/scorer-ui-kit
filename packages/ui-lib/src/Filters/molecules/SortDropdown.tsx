import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import FilterOption from '../../Form/atoms/FilterOption';
import FilterDropHandler from '../atoms/FilterDropHandler';
import LoadingBox from '../atoms/LoadingBox';
import { IFilterItem, FilterButtonDesign } from '../FilterTypes';
import { resetButtonStyles } from '../../common';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledFilterOption = styled(FilterOption)`
  letter-spacing: 0.2px;
`;

const OptionList = styled.div`
  padding: 8px 0;
  ${StyledFilterOption} {
    height: 40px;
    padding: 16px;
  }
`;

const OrderGroup = styled.div`
  font-family: var(--font-ui);
  display: flex;
  border-top: var(--grey-6) 1px solid;
  margin-top: 5px;

  button:first-child {
    border-right: var(--grey-6) 1px solid;
  }
`;

const OrderButton = styled.button<{ isSelected: boolean }>`
  ${resetButtonStyles};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({ isSelected }) => css`

    ${IconWrapper} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${IconWrapper} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${isSelected && css`
      ${IconWrapper} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`;


export interface ISortDropdown {
  buttonText: string
  list: IFilterItem[]
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
  ascendingText?: string
  descendingText?: string
  isSortAscending?: boolean
  selected: IFilterItem
  design?: FilterButtonDesign
  onSelect: (newSort: IFilterItem, isSortAscending: boolean) => void
}

const SortDropdown: React.FC<ISortDropdown> = ({
  buttonText,
  disabled,
  list,
  isLoading,
  loadingText,
  isSortAscending = true,
  selected,
  descendingText = 'Descending',
  ascendingText = 'Ascending',
  design = 'basic',
  onSelect,
  ...props }) => {


  const handleSortSelect = useCallback((newValue: IFilterItem) => {
    if (newValue.value === selected.value) {
      return;
    }

    onSelect(newValue, isSortAscending);

  }, [isSortAscending, onSelect, selected.value]);

  const handleOrderSelect = useCallback((isAscending: boolean) => {
    if (isSortAscending === isAscending) {
      return;
    }

    onSelect(selected, isAscending);

  }, [isSortAscending, onSelect, selected]);

  return (
    <Container {...props}>
      <FilterDropHandler
        {...{ buttonText, disabled, isSortAscending, design }}
        buttonIcon='FilterSorting'
      >
        <FilterDropdownContainer>
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
                      onClick={() => handleSortSelect(item)}
                    />
                  );
                })}
              </OptionList>
            )}
          <OrderGroup>
            <OrderButton isSelected={isSortAscending} onClick={() => handleOrderSelect(true)}>
              <Icon
                icon='FilterAscending'
                size={16}
                weight='light'
              />
              <FilterOption selected={isSortAscending} title={ascendingText} />
            </OrderButton>
            <OrderButton isSelected={!isSortAscending} onClick={() => handleOrderSelect(false)}>
              <Icon
                icon='FilterDescending'
                size={16}
                weight='light'
              />
              <FilterOption selected={!isSortAscending} title={descendingText} />
            </OrderButton>
          </OrderGroup>
        </FilterDropdownContainer>
      </FilterDropHandler>

    </Container>
  );
};

export default SortDropdown;