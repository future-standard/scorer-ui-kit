import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterDropdown,
  IFilterValue,
  PageHeader,
} from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';

export default {
  title: 'Filters/molecules/FilterDropdown',
  component: FilterDropdown,
  parameters: {
    componentSubtitle: 'FilterDropdown component with footer controls',
  }
};

const Wrapper = styled.div`
  margin: 100px;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Sample data for the dropdown
const foodItems = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
  { text: 'Natto', value: 5 },
  { text: 'Sashimi', value: 6 },
];

export const DropdownWithApplyAndReset = () => {

  const iconList = generateIconList();
  const buttonText = text('Button Text', 'Food Menu');
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('Disabled', false);
  const hasOptionsFilter = boolean('Has Options Filter', true);
  const searchPlaceholder = text('Search Placeholder', 'Filter by name...');

  // State for selected items
  const [selected, setSelected] = useState<IFilterValue>(null);

  // Action trackers
  const resetAction = action('Reset clicked');
  const cancelAction = action('Cancel/Close clicked');
  const applyAction = action('Apply clicked');
  const selectAction = action('Item selected');
  const hasApply = boolean('Has Apply', true);
  const hasReset = boolean('Has Reset', true);

  // Handlers for the dropdown
  const handleSelect = useCallback((newSelection: IFilterValue) => {
    selectAction(newSelection);
    setSelected(newSelection);
  }, [selectAction]);

  const handleReset = useCallback(() => {
    resetAction();
  }, [resetAction]);

  const handleCancel = useCallback(() => {
    cancelAction();
  }, [cancelAction]);

  const handleApply = useCallback((newSelection: IFilterValue) => {
    applyAction(newSelection);
  }, [applyAction]);

  return (
    <Container>
      <Wrapper>
        <PageHeader
          title="FilterDropdown with Footer Controls"
          introductionText="This example demonstrates the FilterDropdown component with both Reset and Apply buttons."
        />

        <FilterDropdown
          buttonIcon={buttonIcon}
          buttonText={buttonText}
          list={foodItems}
          selected={selected}
          disabled={disabled}
          hasOptionsFilter={hasOptionsFilter}
          searchPlaceholder={searchPlaceholder}
          searchResultText="Showing [VISIBLE] of [TOTAL]"
          optionType="checkbox"
          onSelect={handleSelect}
          onReset={handleReset}
          onCancel={handleCancel}
          onApplyCallback={handleApply}
          hasReset={hasReset}
          hasApply={hasApply}
        />
      </Wrapper>
    </Container>
  );
};