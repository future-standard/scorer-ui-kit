import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {boolean, text, object} from "@storybook/addon-knobs";

import {TypeTable as LoadingTable } from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';

import {
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

const LoadingTableStory = {
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
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 200,
  },
  {
    header: 'Status',
    groupTitle: 'Metadata',
    sortable: false,
    cellStyle: 'normalImportance',
    showStatus: true,
    minWidth: 200,
  },
  {
    header: 'The Highest Temperature Recorded',
    groupTitle: 'Metadata',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 200,
  },
];

const initialRows : ITypeTableData = [
  {
    columns: []
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
  const disableOneCheckbox = boolean('Disable 1st Checkbox', false);
  const emptyTableTitle = text("emptyTableTitle","No Data Available");
  const emptyTableText = text("emptyTableText", 'There is currently no data');
  const loadingText = text("loadingText", 'Loading Data..')
  const selectable = boolean("Selectable Rows", true);
  const hasGroups = boolean('Has Header Groups', true);
  const columnConfig = object("Column Configuration", columnConfigSample);


  const [rows, setRows] = useState<ITypeTableData>(initialRows);

  const toggleAllCallback = useCallback((checked: boolean) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows.forEach((row) => {
        row._checked = checked;
      });
      return newRows;
    });
  }, [setRows]);

    // Sent to checkbox in TableRow via Table component.
    const selectCallback = useCallback((checked: boolean, id?: string | number) => {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        const targetRowIndex = newRows.findIndex((row) => row.id === id);
        if (targetRowIndex > -1) {
          newRows[targetRowIndex]._checked = checked;
        }
        return newRows;
      });
    }, [setRows]);

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

  useEffect(() => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[0].checkboxDisabled = disableOneCheckbox;
      return newRows;
    });
  }, [disableOneCheckbox])

  return (
    <Container>
      <LoadingTable
        hasHeaderGroups={hasGroups}
        {...{
          columnConfig,
          rows,
          toggleAllCallback,
          selectable,
          selectCallback,
          isLoading,
          loadingText,
          hasThumbnail: true,
          emptyTableTitle,
          emptyTableText,
        }}
      />
    </Container>
  )


};

export default LoadingTableStory;