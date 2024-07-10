import { action } from '@storybook/addon-actions';
import { boolean, number, object, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
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
  {value: 30, textValue: '30'}
]

export const _Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const buttonOnClick = action('Page changed');
  const itemsChange = action('Items Per Page')
  const pageText = text('Page Text', 'Page:');
  const buttonText= text('Button Text', 'Go');
  const itemsText = text('Items Per Page', 'Items Per Page:' )
  const selectWidth = text('Select Width', '60px');

  const totalPages = number('Total Pages', 20);
  const itemOptionsObj = object('Items Options', ItemsOptions);
  const selectDisabled = boolean('Select Width', false)


  const onPageChange = (page: number) => {
    buttonOnClick(page);
    setCurrentPage(page)
  }

  const onItemsChange = (items: number) => {
    itemsChange(items)
  }

  return (
    <Pagination
      pageText={pageText}
      totalPages={totalPages}
      activePage={currentPage}
      buttonText={buttonText}
      itemsText={itemsText}
      selectWidth={selectWidth}
      selectDisabled ={selectDisabled}
      itemsOptions={itemOptionsObj}
      onPageChange={onPageChange}
      onItemsChange={onItemsChange}
    />
  )
}