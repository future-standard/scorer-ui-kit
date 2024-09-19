import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { IFilterItem, SortDropdown } from 'scorer-ui-kit';
import { boolean, object, select } from '@storybook/addon-knobs';
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
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");

  const dropdownList: IFilterItem[] = useMemo(() => [
    { text: language === 'english' ? 'Name' : '名前', value: 'name' },
    { text: language === 'english' ? 'Status' : 'ステータス', value: 'status' },
    { text: language === 'english' ? 'Cost' : '価格', value: 'cost' }
  ], [language])

  const [sortSelected, setSortSelected] = useState<IFilterItem>({ text: dropdownList[1].text, value: dropdownList[0].value });
  const [isAscending, setIsAScending] = useState<boolean>(true);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {Default: 'default', Plain: 'plain'}, 'default')
  // const buttonText = text('Button Text', `Sorted by ${dropdownList[0].text}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const list = object('Dropdown list', dropdownList)
  const lastSelection = action('new sort');

  const handleSelections = useCallback((newSort: IFilterItem, isSortAscending: boolean) => {
    setSortSelected(newSort);
    setIsAScending(isSortAscending);
    lastSelection({ newSort, isSortAscending });
  }, [lastSelection])

  const getSortedTranslation = useCallback(() => {
    const found = dropdownList.find((item) => sortSelected.value === item.value);
    if (found) {
      return (language === 'english') ? `Sorted by ${found.text}` : `${found.text} で`;
    }

    return (language === 'english') ? `Sorted by ${sortSelected.text}` : `${sortSelected.text} で`;

  }, [dropdownList, language, sortSelected.text, sortSelected.value])

  return (
    <Container>
      <SortDropdown
        {...{
          isSortAscending: isAscending,
          buttonText: getSortedTranslation(),
          isLoading,
          design,
          list: dropdownList,
          selected: sortSelected,
          onSelect: handleSelections,
          ascendingText: language === 'english' ? 'Ascending' : '昇順',
          descendingText: language === 'english' ? 'Descending' : '降順'
        }}

      />
    </Container>
  )
}