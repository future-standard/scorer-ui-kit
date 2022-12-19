import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FilterLayout } from 'scorer-ui-kit';
import { select, boolean } from '@storybook/addon-knobs';
import { _CameraPanels } from '../../CameraPanels/organisms/CameraPanels.stories';
import { ActionsTable } from '../../Tables/molecules/ActionsTable.stories';


export default {
  title: 'Filters/molecules',
  component: FilterLayout,
  decorators: []
};

const Container = styled.div``;

const InnerContainer = styled.div`
  margin-top: 20px;
`;

export const _FilterLayout = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const hasPageSettings = boolean('Has Page Settings', true);
  const sizeOptions = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(20);
  const [layout, setLayout] = useState('grid');

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

  const handleLayout = useCallback((layout: string) => {
    setLayout(layout);
  }, []);

  return (
    <Container>
      <FilterLayout
      {...{
        onPageSizeChange: onSizePerPageChange,
        pageSizeOptions: sizeOptions,
        defaultPageSize: pageSize,
        getLayout: handleLayout,
        layoutText: language === 'english' ? 'Layout' : 'レイアウト',
        pageSizeText: language === 'english' ? 'Items Per Page' : '１ページのアイテム数',
        contentArray: arrayList,
        hasPageSettings: hasPageSettings
      }}
      />
      <InnerContainer>
        {layout === 'grid' ? <_CameraPanels /> : <ActionsTable />}
      </InnerContainer>
    </Container>
  )
}