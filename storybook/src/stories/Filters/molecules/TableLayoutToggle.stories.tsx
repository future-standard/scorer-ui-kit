import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { TableLayoutToggle } from 'scorer-ui-kit';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Filters/molecules',
  component: TableLayoutToggle,
  decorators: []
};

const Container = styled.div``;

export const _TableLayoutToggle = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const sizeOptions = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(20);

  const onSizePerPageChange = useCallback((size: number) => {
    setPageSize(size);
  },[]);

  const handleLayout = useCallback((layout: string) => {
    
  }, []);

  return (
    <Container>
      <TableLayoutToggle
      {...{
        onPageSizeChange: onSizePerPageChange,
        pageSizeOptions: sizeOptions,
        defaultPageSize: pageSize,
        getLayout: handleLayout,
        buttonValue1: 'grid',
        buttonValue2: 'list',
        icon1: 'LayoutGrid',
        icon2: 'LayoutList',
        layoutText: language === 'english' ? 'Layout' : 'レイアウト',
        pageSizeText: language === 'english' ? 'Items Per Page' : '１ページのアイテム数'
      }}
      />
    </Container>
  )
}