import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { IFilterItem, SortDropdown } from 'scorer-ui-kit';
// import { boolean, object, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Filters/molecules',
  component: SortDropdown,
  decorators: [],
  parameters: {
    jsx: { skip: 1 }
  }
};

const Container = styled.div``;

export const _SortDropdown = () => {
  // const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");

  const dropdownList: IFilterItem[] = useMemo(() => [
    { text:  '名前', value: 'name' },
    { text:  'ステータス', value: 'status' },
    { text: '価格', value: 'cost' }
  ], [])

  const [sortSelected, setSortSelected] = useState<IFilterItem>({ text: dropdownList[1].text, value: dropdownList[0].value });
  const [isAscending, setIsAScending] = useState<boolean>(true);
  // const isLoading = boolean('Is Loading', false);

  // const buttonText = text('Button Text', `Sorted by ${dropdownList[0].text}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const list = object('Dropdown list', dropdownList)
  const lastSelection = action('new sort');

  const handleSelections = useCallback((newSort: IFilterItem, isSortAscending: boolean) => {
    setSortSelected(newSort);
    setIsAScending(isSortAscending);
    lastSelection({ newSort, isSortAscending });
  }, [lastSelection])

  const getSortedTranslation = useCallback(() => {
    const found = dropdownList.find((item) => sortSelected.value === item.value);
    if (found) {
      return `${found.text} で`;
    }

    return `${sortSelected.text} で`;

  }, [dropdownList, sortSelected.text, sortSelected.value])

  return (
    <Container>
      <SortDropdown
        {...{
          isSortAscending: isAscending,
          buttonText: getSortedTranslation(),

          list: dropdownList,
          selected: sortSelected,
          onSelect: handleSelections,
          // ascendingText: language === 'english' ? 'Ascending' : '昇順',
          // descendingText: language === 'english' ? 'Descending' : '降順'
        }}

      />
    </Container>
  )
}