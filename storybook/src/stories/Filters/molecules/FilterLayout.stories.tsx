import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FilterLayout } from 'scorer-ui-kit';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Filters/molecules',
  component: FilterLayout,
  decorators: []
};

const Container = styled.div``;

export const _FilterLayout = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const hasPageSettings = boolean('Has Page Settings', true);
  const handleLayout = action('layout-button-click');
  const handlePageSizeChange = action('page-size');
  const sizeOptions = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(20);

  const arrayList = [
    {
      icon: 'LayoutGrid',
      id: 'grid',
      tooltipText: 'Grid View'
    },
    {
      icon: 'LayoutList',
      id: 'list',
      tooltipText: 'List View'
    }
  ];

  const onSizePerPageChange = useCallback((size: number) => {
    setPageSize(size);
  },[]);

  return (
    <Container>
      <FilterLayout
      {...{
        onPageSizeChange: (size: number) => {handlePageSizeChange(size); onSizePerPageChange(size); },
        pageSizeOptions: sizeOptions,
        defaultPageSize: pageSize,
        getLayout: handleLayout,
        layoutText: language === 'english' ? 'Layout' : 'レイアウト',
        pageSizeText: language === 'english' ? 'Items Per Page' : '１ページのアイテム数',
        contentArray: arrayList,
        hasPageSettings: hasPageSettings
      }}
      />
    </Container>
  )
}