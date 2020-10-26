import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
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

const initialRows : ITypeTableData = [
  {
    id: 'device-1',
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
    id: 'device-2',
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
    id: 'device-3',
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
    id: 'device-4',
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

  const [rows, setRows] = useState<ITypeTableData>(initialRows)

  const hasStatus = boolean("Has Device Status", false);
  const hasThumbnail = boolean("Has Thumbnail", false);
  const hasTypeIcon = boolean("Has Device Type Icon", false);

  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const customRowData = object("Row Data", rows);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked:boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id)
    newRows[targetRowIndex]._checked = checked;

    setRows(newRows);

  }, [rows, setRows]);


  const toggleAllCallback = useCallback((checked:boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    setRows(newRows);
  }, [rows, setRows]);



  useEffect(() => {
    setRows(customRowData);
  }, [customRowData])

  return <Container><TypeTable {...{columnConfig, selectable, selectCallback, toggleAllCallback, rows, hasStatus, hasThumbnail, hasTypeIcon}} /></Container>;
};