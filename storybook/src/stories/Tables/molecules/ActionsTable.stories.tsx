import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";

import {
TypeTable as TypeTableCustom,
ActionButtons,
IconButtonData
} from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';
import { 
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

const Container = styled.div`
  padding: 100px;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTableCustom,
  decorators: []
};

const columnConfigSample : ITableColumnConfig[] = [
  {
    header: 'Analyse Range',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Job Created At',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Run Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Status',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Actions',
    sortable: false,
    cellStyle: 'normalImportance',
  },

];

/**
 * March 3
 * TODO: 
 * Update onClick actions to ve displayed in Storybook actions
 * Asign values depending ID
 * Update IconButtons Styling
 *  - lets reduce styling options? (remove color option)
 *  - Add hover styling
 */
const actionButtonsConfig : IconButtonData[] = [
  {
    icon: 'RetryJob',
    onClick: () => {console.log('clicked on RetryJob')},
  },
  {
    icon: 'Delete',
    onClick: () => {console.log('clicked on Delete')},
  },
  {
    icon: 'DownloadVideo',
    onClick: () => {console.log('clicked on DownloadVideo')},
  },
  {
    icon: 'Download',
    onClick: () => {console.log('clicked on Download')},
  },
]

const initialRows : ITypeTableData = [
  {
    id: 'row1',
    header: {
      image: photo,
    },
    columns: [
      {text: `2020/06/11 - 16:00  → 2020/06/11 - 21:30`},
      {text: `2020/07/12 - 16:00`},
      {text: `00:00:12`},
      {text: `Complete`},
      { customComponent: <ActionButtons buttonsConfig = {actionButtonsConfig}/>},
    ]
  },
  {
    id: 'row2',
    header: {
      image: photo,
    },
    columns: [
      {text: `2020/06/11 - 16:00  → 2020/06/11 - 21:30`},
      {text: `2020/07/12 - 16:00`},
      {text: `00:00:12`},
      {text: `Complete`},
      { customComponent: <ActionButtons buttonsConfig = {actionButtonsConfig}/>},
    ]
  }
];

export const ActionsTable = () => {

  const columnConfig = object("Column Configuration", columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const selectable = boolean("Selectable Rows", true);

  const toggleAllCallback = useCallback((checked:boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    setRows(newRows);
  }, [rows, setRows]);

  const selectCallback = useCallback((checked:boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id)
    newRows[targetRowIndex]._checked = checked;

    setRows(newRows);

  }, [rows, setRows]);

  return (
      <Container>
        <TypeTableCustom
          {...{
              columnConfig,
              rows,
              selectable,
              selectCallback,
              toggleAllCallback
            }
          } 
        />
      </Container>
      )
};