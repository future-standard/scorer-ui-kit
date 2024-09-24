import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import FilterOption from '../../Form/atoms/FilterOption';
import FilterDropHandler from '../atoms/FilterDropHandler';
import LoadingBox from '../atoms/LoadingBox';
import { IFilterItem } from '../FilterTypes';
import { resetButtonStyles } from '../../common';
import { fontFamily } from '../../theme/common';
import { FilterButtonDesign } from '..';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const TopLine = styled.div`
  background-color: var(--primary-7);
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const InnerBox = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: unset;
  box-shadow: 0px 5px 25px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border-color: var(--grey-6);
  border: var(--grey-6) 1px solid;
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

const OrderGroup = styled.div`
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
  font-family: ${fontFamily.data};
  color: var(--grey-12);
  font-size: 14px;
  height: 35px;
  ${({ isSelected }) => css`

  ${IconWrapper} {
    margin-left: 10px;
    display: flex;
    align-items: center;
    [stroke]{
        stroke: var(--dimmed);
      }
    }

  &:hover {
    ${IconWrapper} {
      [stroke]{
        stroke: var(--primary-8);
        }
      }
    }

  ${isSelected && css`
    ${IconWrapper} {
      [stroke]{
        stroke: var(--primary-8);
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
        </InnerBox>
      </FilterDropHandler>

    </Container>
  );
};

export default SortDropdown;