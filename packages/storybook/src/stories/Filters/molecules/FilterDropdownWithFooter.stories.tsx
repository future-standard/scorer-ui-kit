import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { boolean, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterDropdown,
  IFilterValue,
  PageHeader,
} from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';
import { searchTemplateResultEnglish, searchTemplateResultJapanese } from '../../helpers/data_samples';

const FilterDropdownWithFooterStory = {
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
const foodItemsEng = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
  { text: 'Natto', value: 5 },
  { text: 'Sashimi', value: 6 },
];

const foodItemsJap = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
  { text: '納豆', value: 5 },
  { text: 'お造り', value: 6 },
];

export const DropdownWithApplyAndReset = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const iconList = generateIconList();
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('Disabled', false);
  const hasOptionsFilter = boolean('Has Options Filter', true);

  // State for selected items
  const [selected, setSelected] = useState<IFilterValue>(null);

  // Action trackers
  const resetAction = action('Reset clicked');
  const cancelAction = action('Cancel/Close clicked');
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

  return (
    <Container>
      <Wrapper>
        <PageHeader
          title="FilterDropdown with Footer Controls"
          introductionText="This example demonstrates the FilterDropdown component with both Reset and Apply buttons."
        />

        <FilterDropdown
          buttonIcon={buttonIcon}
          buttonText={language === 'japanese' ? 'メニュー' : 'Menu' }
          list={language === 'japanese' ? foodItemsJap : foodItemsEng}
          selected={selected}
          disabled={disabled}
          hasOptionsFilter={hasOptionsFilter}
          searchPlaceholder={language === 'japanese' ?  'メニュー...' : 'Menu options...' }
          searchResultText={language === 'japanese' ? searchTemplateResultJapanese : searchTemplateResultEnglish}
          optionType="checkbox"
          onSelect={handleSelect}
          onResetCallback={handleReset}
          onCancelCallback={handleCancel}
          hasReset={hasReset}
          hasApply={hasApply}
          resetText={ language === 'japanese' ? 'リセット' : 'Reset'}
          cancelText={ language === 'japanese' ? 'キャンセル' : 'Cancel'}
          closeText={ language === 'japanese' ? '閉じる' : 'Close' }
          applyText={ language === 'japanese' ? '適用' : 'Apply' }
          descendingText = { language === 'japanese' ? '降順' : 'Descending'}
          ascendingText={ language === 'japanese' ? '昇順' : 'Ascending'}
        />
      </Wrapper>
    </Container>
  );
};

export default FilterDropdownWithFooterStory;