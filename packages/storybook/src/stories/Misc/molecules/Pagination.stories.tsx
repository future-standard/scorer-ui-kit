import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import React from 'react';
import {Pagination}  from 'scorer-ui-kit';

export default {
  title: 'Misc/Molecules',
  component: Pagination,
  decorators: []
};

export const _Pagination = () => {
  const buttonOnClick = action('Page changed');

  const totalPages = number('Total Pages', 20)

  const onPageChange = (page: number) => {
    buttonOnClick(page);
    console.log('page', page);
  }

  return (
    <Pagination
      totalPages={totalPages}
      defaultPage={1}
      pageText={'Page:'}
      buttonText={'GO'}
      onPageChange={onPageChange}
    />
  )
}

