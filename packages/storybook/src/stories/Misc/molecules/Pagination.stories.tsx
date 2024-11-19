import { action } from '@storybook/addon-actions';
import { boolean, number, object, text } from '@storybook/addon-knobs';
import React, { useEffect, useState } from 'react';
import {Pagination}  from 'scorer-ui-kit';

export default {
  title: 'Misc/Molecules',
  component: Pagination,
  decorators: []
};

const ItemsOptions = [
  {value:5, textValue:'5'},
  {value: 10, textValue: '10'},
  {value: 20, textValue: '20'},
  {value: 30, textValue: '30'},
  {value: 100, textValue: '100'}
]

export const _Pagination = () => {
  const controlledActivePage = number('Active Page', 1)
  const [currentPage, setCurrentPage] = useState(controlledActivePage);
  const buttonOnClick = action('Page changed');
  const itemsChange = action('Items Per Page')
  const pageText = text('Page Text', 'Page:');
  const buttonText= text('Button Text', 'GO');
  const itemsText = text('Items Per Page', 'Items Per Page:' )
  const itemsDefaultValue = number('Items Default Value', 10 );
  const selectWidth = text('Select Width', '70px');
  const selectId = text('SelectId', 'UniqID23');
  const totalPages = number('Total Pages', 20);
  const selectDisabled = boolean('Select Disabled', false)
  const itemOptionsObj = object('Items Options', ItemsOptions);

  const onPageChange = (page: number) => {
    buttonOnClick(page);
    setCurrentPage(page)
  }

  const onItemsChange = (items: number) => {
    itemsChange(items)
  }

  useEffect(() => {
    setCurrentPage(controlledActivePage);
  },[controlledActivePage])

  return (
    <Pagination
      selectId={selectId}
      pageText={pageText}
      totalPages={totalPages}
      activePage={currentPage}
      buttonText={buttonText}
      itemsText={itemsText}
      selectWidth={selectWidth}
      selectDisabled ={selectDisabled}
      itemsDefaultValue={itemsDefaultValue}
      itemsOptions={itemOptionsObj}
      onPageChange={onPageChange}
      onItemsChange={onItemsChange}
    />
  )
}