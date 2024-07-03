import React from 'react';
import {Pagination}  from 'scorer-ui-kit';


export default {
  title: 'Misc/Molecules',
  component: Pagination,
  decorators: []
};



export const _Pagination = () => {

  const onPageChange = () => {
    console.log('page changed');
  }

  return (
    <Pagination
    totalPages={10}
    defaultPage={1}
    pageText={'Page:'}
    buttonText={'GO'}
    language='ja'
    onPageChange={onPageChange}
    >
    </Pagination>
  )
}

