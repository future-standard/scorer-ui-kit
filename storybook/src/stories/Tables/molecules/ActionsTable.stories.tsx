import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";

import {
TypeTable as TypeTableCustom,
Button} from 'scorer-ui-kit';
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

interface IDeleteProps {
  deviceId: string
}

const DeleteButton : React.FC<IDeleteProps> = ({ deviceId, children}) => {  
  const handleDeleteDevice = (deviceId : string) => {
    console.log(`deleting ${deviceId}`);
  }

  return (<Button onClick={() => handleDeleteDevice(deviceId)}>{children}</Button>)
}

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
      { customComponent: <DeleteButton deviceId='device-1'>Delete</DeleteButton>},
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
      { customComponent: <DeleteButton deviceId='device-1'>Delete</DeleteButton>},
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