import { number } from '@storybook/addon-knobs';
import React from 'react';
import {Pagination}  from 'scorer-ui-kit';


export default {
  title: 'Misc/Molecules',
  component: Pagination,
  decorators: []
};



export const _Pagination = () => {

  const totalPages = number('Total Pages', 20)

  const onPageChange = () => {
    console.log('[Storybook] - Page changed');
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

