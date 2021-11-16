import React, { useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import BasicSearchInput from '../../Misc/atoms/BasicSearchInput';
import FilterDropdown from '../../Filters/molecules/FilterDropdown';
import FilterButton from '../../Filters/atoms/FilterButton';
import DropdownDatePicker from './DropdownDatePicker';
import { IFilterDatePicker, IFilterDropdownExt, ISearchFilter } from '../FilterTypes';

const fadeInAnimation = keyframes`
  0% {
    width: 50%;
    opacity: .5;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
  }
`;

const SearchInputWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 3px;
  flex: 1 1 200px;
  max-width: 320px;
`;

const CloseSearchInputWrapper = styled.div`
  ${({ theme }) => theme && css`
    animation: ${fadeInAnimation} ${theme.animation.speed.slow} ${theme.animation.easing.primary.inOut};
  `};
`;

const StyledFilterButton = styled(FilterButton)``;
const StyledDropdown = styled(FilterDropdown)``;
const StyledDropdownDatePicker = styled(DropdownDatePicker)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${SearchInputWrapper}, ${StyledDropdown}, ${StyledFilterButton}, ${StyledDropdownDatePicker} {
    margin: 0 5px 10px 0;
  }
`;

const renderDropdowns = (dropdownFilters: IFilterDropdownExt[], showMoreDropdowns: boolean, hasShowMore: boolean) => {
  return dropdownFilters.map((dropdown: IFilterDropdownExt) => {
    if (!dropdown.canHide || !showMoreDropdowns || (dropdown.canHide && !hasShowMore)) {
      return <StyledDropdown key={`dropdownFilter-id-${dropdown.id}`} {...dropdown} />;
    }
    return null;
  });
};

const renderSearchInputs = (
  searchFilters: ISearchFilter[],
  visibleSearchInputs: String[],
  handleVisibleSearch: (searchId: string) => void
) => {
  return searchFilters.map((searchInput: ISearchFilter) => {

    if (visibleSearchInputs.includes(searchInput.id)) {
      return (
        <SearchInputWrapper key={`searchFilter-id-${searchInput.id}`}>
          {searchInput.canHide
            ? (
              <CloseSearchInputWrapper>
                <BasicSearchInput {...searchInput} hasCrossButton onCrossClick={() => handleVisibleSearch(searchInput.id)} />
              </CloseSearchInputWrapper>
            )
            : <BasicSearchInput {...searchInput} />}
        </SearchInputWrapper>
      );
    }
    return null;
  });
};

const renderDatePickers = (datePickerFilters: IFilterDatePicker[]) => {
  return datePickerFilters.map((datePicker: IFilterDatePicker) => {
    return (
      <StyledDropdownDatePicker
        key={`datePicker-filter-${datePicker.id}`}
        {...{ ...datePicker }}
      />
    );
  });
};

const renderAddSearchButtons = (
  searchFilters: ISearchFilter[],
  visibleSearchInputs: String[],
  handleVisibleSearch: (searchId: string) => void
) => {
  return searchFilters.map((element) => {
    if (element.canHide && !visibleSearchInputs.includes(element.id)) {
      const searchId = element.id;
      return (
        <StyledFilterButton
          key={`search-button-id-${element.id}`}
          icon='Add'
          onClick={() => handleVisibleSearch(searchId)}
        >
          {element.showFieldText}
        </StyledFilterButton>
      );
    }
    return null;
  });
};

// initially visible are only the ones that can't hide
const initialSearchFilters = (searchFilters: ISearchFilter[]): String[] => {
  const currentVisible: String[] = [];

  searchFilters.forEach(element => {
    if (!element.canHide) {
      currentVisible.push(element.id);
    }
  });

  return currentVisible;
};

export interface IFilterInputs {
  searchFilters?: ISearchFilter[]
  dropdownFilters?: IFilterDropdownExt[]
  datePickerFilters?: IFilterDatePicker[]
  hasShowMore?: boolean
  showMoreText?: string
  showLessText?: string
}

const FilterInputs: React.FC<IFilterInputs> = ({
  hasShowMore = false,
  searchFilters = [],
  datePickerFilters = [],
  dropdownFilters = [],
  showMoreText = 'Show More',
  showLessText = 'Show Less',
  ...props
}) => {

  const [visibleSearchInputs, setVisibleSearchInputs] = useState<String[]>(initialSearchFilters(searchFilters));
  const [showMoreDropdowns, setShowMoreDropdowns] = useState(hasShowMore ? true : false);

  const toggleShowMore = useCallback(() => {
    setShowMoreDropdowns((prev) => !prev);
  }, []);

  const handleVisibleSearch = useCallback((searchId: string) => {

    if (visibleSearchInputs.includes(searchId)) {
      const newVisible = visibleSearchInputs.filter((id) => searchId !== id);
      setVisibleSearchInputs(newVisible);
    } else {
      const newVisible = [...visibleSearchInputs, searchId];
      setVisibleSearchInputs(newVisible);
    }

  }, [visibleSearchInputs]);

  return (
    <Container {...{ props }}>
      {renderSearchInputs(searchFilters, visibleSearchInputs, handleVisibleSearch)}
      {renderDatePickers(datePickerFilters)}
      {renderDropdowns(dropdownFilters, showMoreDropdowns, hasShowMore)}

      {/* {When the Dev does not initialize hasShowMore as true but has hidden inputs, it will show the add Searcher of the canHide} */}
      {(!hasShowMore || !showMoreDropdowns) && renderAddSearchButtons(searchFilters, visibleSearchInputs, handleVisibleSearch)}
      {hasShowMore && (
        <FilterButton
          icon='FilterEllipsis'
          onClick={toggleShowMore}
        >
          {showMoreDropdowns ? showMoreText : showLessText}
        </FilterButton>)}
    </Container>
  );
};

export default FilterInputs;