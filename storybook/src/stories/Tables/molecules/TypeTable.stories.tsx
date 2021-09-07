import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";
import {TypeTable, ModalProvider} from 'scorer-ui-kit';

import {
  ITypeTableData,
} from 'scorer-ui-kit/dist/Tables';
import { tableData, columnConfigSample ,ITableSampleData } from '../../data_samples';
import {sortDataBy, rowMaker} from '../../helpers';

const Container = styled.div`
  padding: 100px;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: []
};

/** Imagine this data comes from Server :) */
const defaultData : ITableSampleData[] = tableData;

const sortedByDeviceData = sortDataBy(defaultData, 'deviceName', true);

export const _TypeTable = () => {

  const [data, setData] = useState<ITableSampleData[]>(sortedByDeviceData);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(sortedByDeviceData));

  // To implement...
  const hasStatus = boolean("Has Device Status", true);
  const hasThumbnail = boolean("Has Thumbnail", true);
  const hasTypeIcon = boolean("Has Device Type Icon", true);
  const hasHeaderGroups = boolean("Has Header Groups", true);
  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);


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

  const sortCallback = useCallback((ascending: boolean, columnId: string) => {
    const unsortedData : ITableSampleData[] = [...data];

    const validKey = columnId as keyof ITableSampleData;
    const sortedData = sortDataBy(unsortedData, validKey, ascending);
    setData(sortedData);

  },[data]);

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data])

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <TypeTable {...{ columnConfig, selectable, selectCallback, toggleAllCallback, rows, hasStatus, hasThumbnail, hasTypeIcon, defaultAscending: true, sortCallback, hasHeaderGroups }} />
      </ModalProvider>
    </Container>
  );
};