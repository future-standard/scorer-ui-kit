import React from 'react';
import styled from 'styled-components';
import { action } from "@storybook/addon-actions";
import { object, boolean } from "@storybook/addon-knobs";

import {TypeTable} from 'scorer-ui-kit';
import photo from '../assets/placeholder.jpg';
import { ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';

const Container = styled.div`
  margin: 100px;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: []
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
    alignment: 'right',
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
  {
    header: {
      image: photo,
      icon: 'Zone'
    },
    columns:
    [
      { text: 'Device Name', href: '#' },
      { text: 'Just Now' },
      { text: '242', unit: 'mb' },
      { text: '¥20,000'}
    ]
  },
  {
    header: {
      image: photo,
      icon: 'Location'
    },
    columns:
    [
      { text: 'Another Device', href: '#' },
      { text: '1st October 2019' },
      { text: '2.1', unit: 'gb' },
      { text: '¥4,000'}
    ],
  },
  {
    header: {
      image: photo,
      icon: 'Location'
    },
    columns:
    [
      { text: 'Old Device', href: '#' },
      { text: '22nd March 2020' },
      { text: '2.1', unit: 'tb' },
      { text: '¥7,000'}
    ],
  },
  {
    header: {
      image: photo,
      icon: 'Location'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' }
    ]
  }
];

export const _TypeTable = () => {

  // To implement...
  const hasStatus = boolean("Has Device Status", false);
  const hasThumbnail = boolean("Has Thumbnail", false);
  const hasTypeIcon = boolean("Has Device Type Icon", false);

  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const rows = object("Row Data", rowDataSample);

  const selectCallback = () => {
    action('select-toggled');
  }

  return <Container><TypeTable {...{columnConfig, selectable, selectCallback, rows, hasStatus, hasThumbnail, hasTypeIcon}} /></Container>;
};