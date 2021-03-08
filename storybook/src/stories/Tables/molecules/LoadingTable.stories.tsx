import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, boolean, text } from "@storybook/addon-knobs";

import {TypeTable as LoadingTable } from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';

import { 
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

export default {
  title: 'Tables/molecules',
  component: LoadingTable,
  decorators: []
};

const Container = styled.div`
  padding: 100px;
`;


const columnConfigSample : ITableColumnConfig[] = [
  {
    header: 'When',
    sortable: false,
    cellStyle: 'normalImportance',
    showStatus: true,
  },
  {
    header: 'Status',
    sortable: false,
    cellStyle: 'normalImportance',
    showStatus: true,
  },
  {
    header: 'Temperature',
    sortable: false,
    cellStyle: 'normalImportance',
    showStatus: true,
  },
];

const initialRows : ITypeTableData = [
  {
    id: 'row1',
    header: {
    },
    columns: [
    ]
  }
];


const dataRows : ITypeTableData = [
  {
    id: 'device-1',
    header: {
      image: photo,
    },
    columns:
    [
      { text: 'JustNow'},
      { text: 'OK', status: 'good' },
      { text: '38.2ºC' },
    ]
  },
  {
    id: 'device-2',
    header: {
      image: photo,
    },
    columns:
    [
      { text: '3 mins ago'},
      { text: 'Warning', status: 'danger' },
      { text: '38.2ºC' },
    ]
  },
  {
    id: 'device-3',
    header: {
      image: photo,
    },
    columns:
    [
      { text: '12 mins ago'},
      { text: 'OK', status: 'good' },
      { text: '38.2ºC' },
    ]
  },
  {
    id: 'device-4',
    header: {
      image: photo,
    },
    columns:
    [
      { text: '1 hour ago'},
      { text: 'OK', status: 'good' },
      { text: '38.2ºC' },
    ]
  },
];

export const _LoadingTable = () => {
  const isLoading = boolean("IsLoading", true);
  const emptyTable = boolean("Show Empty Table", true);
  const loadingText = text("loadingText", 'Loading Data..')
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);

  const toggleAllCallback = useCallback((checked:boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    setRows(newRows);
  }, [rows, setRows]);

  useEffect(() => {
    if(emptyTable) {
      setRows(initialRows)
    } else {
      setRows(dataRows);
    }
    return () => {
      setRows(initialRows);
    }
  }, [emptyTable])

  return(
    <Container>
      <LoadingTable {
        ...{
          columnConfig,
          rows,
          toggleAllCallback,
          isLoading,
          loadingText,
          hasThumbnail: true,
        }
      }/>
    </Container>
  )


};