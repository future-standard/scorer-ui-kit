import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import {Pagination}  from 'scorer-ui-kit';

export default {
  title: 'Misc/Molecules',
  component: Pagination,
  decorators: []
};

export const _Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const buttonOnClick = action('Page changed');

  const totalPages = number('Total Pages', 20)

  const onPageChange = (page: number) => {
    buttonOnClick(page);
    setCurrentPage(page)
  }

  return (
    <Pagination
      totalPages={totalPages}
      defaultPage={currentPage}
      pageText={'Page:'}
      buttonText={'GO'}
      onPageChange={onPageChange}
    />
  )
}

