import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import FilterOption from '../../Form/atoms/FilterOption';
import FilterDropHandler from '../atoms/FilterDropHandler';
import LoadingBox from '../atoms/LoadingBox';
import { IFilterItem } from '../FilterTypes';
import { resetButtonStyles } from '../../common';

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
  border: solid 1px hsl(207, 16%, 86%);
  border-top: unset;
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

const OrderGroup = styled.div`
  display: flex;
  border-top: ${({ theme: { colors } }) => colors.divider} 1px solid;
  margin-top: 5px;
  button:first-child {
    border-right: ${({ theme: { colors } }) => colors.divider} 1px solid;
  }
`;

const OrderButton = styled.button<{ isSelected: boolean }>`
  ${resetButtonStyles};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.data};
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  height: 35px;
  ${({ theme, isSelected }) => theme && css`

  ${IconWrapper} {
    margin-left: 10px;
    display: flex;
    align-items: center;
    [stroke]{
        stroke: ${theme.colors.icons.dimmed};
      }
    }

  &:hover {
    ${IconWrapper} {
      [stroke]{
        stroke: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
        }
      }
    }

  ${isSelected && css`
    ${IconWrapper} {
      [stroke]{
        stroke: ${theme.styles.form.checkbox.checked.default.backgroundColor};
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
        {...{ buttonText, disabled, isSortAscending }}
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