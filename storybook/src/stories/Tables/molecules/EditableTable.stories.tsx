import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, boolean, text } from "@storybook/addon-knobs";

import {TypeTable as EditableTable,
  EditCell,
} from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';

import { 
  IRowData,
  IStatus,
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

export default {
  title: 'Tables/molecules',
  component: EditableTable,
  decorators: []
};

const Container = styled.div`
  padding: 100px;
`;

const columnConfigSample : ITableColumnConfig[] = [
  {
    header: 'Camera Name',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'When',
    sortable: false,
    cellStyle: 'normalImportance',

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

interface IExampleData {
  id: string,
  cameraName: string,
  jobTime: string,
  status: IStatus,
  statusText: string,
  temperature: string,
}
const sampleData: IExampleData[] = [
  {
    id: 'device-1',
    cameraName: 'Camera1',
    jobTime: 'Just Now',
    status: 'good',
    statusText: 'OK',
    temperature: '38.2ºC',
  },
  {
    id: 'device-2',
    cameraName: 'Camera2',
    jobTime: '3 mins ago',
    status: 'danger',
    statusText: 'Warning',
    temperature: '38.2ºC',
  },
  {
    id: 'device-2',
    cameraName: 'Camera2',
    jobTime: '12 mins ago',
    status: 'danger',
    statusText:'Warning',
    temperature: '38.2ºC',
  }
];

//  [
//   {
//     id: 'device-1',
//     header: {
//       image: photo,
//     },
//     columns:
//     [
//       {customComponent: <EditCell defaultValue={'Camera1'} rowKey={'device-1'}/>},
//       { text: 'JustNow'},
//       { text: 'OK', status: 'good' },
//       { text: '38.2ºC' },
//     ]
//   },
//   {
//     id: 'device-2',
//     header: {
//       image: photo,
//     },
//     columns:
//     [
//       {customComponent: <EditCell defaultValue={'Camera2'} rowKey={'device-2'}/>},
//       { text: '3 mins ago'},
//       { text: 'Warning', status: 'danger' },
//       { text: '38.2ºC' },
//     ]
//   },
//   {
//     id: 'device-3',
//     header: {
//       image: photo,
//     },
//     columns:
//     [
//       {customComponent: <EditCell defaultValue={'Camera3'} rowKey={'device-3'}/>},
//       { text: '12 mins ago'},
//       { text: 'OK', status: 'good' },
//       { text: '38.2ºC' },
//     ]
//   },
//   {
//     id: 'device-4',
//     header: {
//       image: photo,
//     },
//     columns:
//     [
//       {customComponent: <EditCell defaultValue={'Camera4'} rowKey={'device-4'}/>},
//       { text: '1 hour ago'},
//       { text: 'OK', status: 'good' },
//       { text: '38.2ºC' },
//     ]
//   },
// ];

export const _EditableTable = () => {
  const loadingText = text("loadingText", 'Loading Data..')
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);

  const updateCameraName = useCallback((name: string, rowKey: string) => {
    const updatedData = [...data];
    const updatedRow = updatedData.find(({id}) =>  id === rowKey);
    if(updatedRow) {
      updatedRow.cameraName = name;
      setData(updatedData);
      const newRows = buildDataRows(updatedData);
      setRows(newRows);
    }
  },[data]);

  const buildDataRows = useCallback((data : IExampleData[]) : ITypeTableData =>  {
    const newRows : ITypeTableData = data.map(({id, cameraName, jobTime, status, statusText, temperature}) => {
      const row : IRowData =  ({
        id,
        header: {
          image: photo,
        },
        columns:
        [
          {customComponent: <EditCell defaultValue={cameraName} rowKey={id} saveCallback={updateCameraName}/>},
          { text: jobTime},
          { text: statusText, status },
          { text: temperature },
        ]
      })
      return row;
    })
  
    return newRows;
  },[updateCameraName])

  useEffect(() => {
    const dataRows : ITypeTableData = buildDataRows(sampleData);
    setRows(dataRows);
    return () => {
      setRows([])
    }
  }, [buildDataRows]);

  return(
    <Container>
      <EditableTable {
        ...{
          columnConfig,
          rows,
          loadingText,
          hasThumbnail: true,
        }
      }/>
    </Container>
  )
};