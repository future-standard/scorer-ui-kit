import React from 'react';
import styled from 'styled-components';
import { withKnobs, object, boolean } from "@storybook/addon-knobs";

import TypeTable from '../../Tables/molecules/TypeTable';
import {ITableColumnConfig, ITypeTableData} from '../../Tables';

const Container = styled.div`
  margin: 100px;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: [withKnobs]
};

const columnConfigSample : ITableColumnConfig[] = [
  {
    header: 'Device Name',
    sortable: true,
    cellStyle: 'firstColumn',
  },
  {
    header: 'Created',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center'
  },
  {
    header: 'Usage',
    sortable: false,
    cellStyle: 'normalImportance',
    showUnit: true
  },
  {
    header: 'Cost',
    sortable: true,
    cellStyle: 'highImportance',
    alignment: 'right',
    hasCopyButton: true
  },
  // {
  //   // TODO: For things like buttons
  //   cellStyle: 'action',
  //   alignment: 'right',
  // }
];

const rowDataSample : ITypeTableData = [
  [
    { text: 'Device Name', href: '#' },
    { text: 'Just Now' },
    { text: '200', unit: 'Tb' },
    { text: '¥20,000'}
  ],
  [
    { text: 'Another Device', href: '#' },
    { text: '1st October 2019' },
    { text: '200', unit: 'Tb' },
    { text: '¥4,000'}
  ],
  [
    { text: 'Old Device', href: '#' },
    { text: '22nd March 2020' },
    { text: '200', unit: 'Tb' },
    { text: '¥7,000'}
  ],
  [
    { text: 'Magic Edge Cloud', href: '#' },
    { text: '2nd April 2020' },
    { text: '200', unit: 'Tb' },
    { text: '¥25,000' }
  ]
];

export const _TypeTable = () => {

  // To implement...
  const hasStatus = boolean("Has Device Status", false);
  const hasThumbnail = boolean("Has Thumbnail", false);
  const hasTypeIcon = boolean("Has Device Type Icon", false);

  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const rows = object("Row Data", rowDataSample);

  return <Container><TypeTable {...{columnConfig, selectable, rows, hasStatus, hasThumbnail, hasTypeIcon}} /></Container>;
};