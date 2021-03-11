import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, text } from "@storybook/addon-knobs";

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

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(() => {console.log('DataBaseUpdated')}  , ms));
}

export const _EditableTable = () => {
  const loadingText = text("loadingText", 'Loading Data..')
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);
  const [loading, setLoading] = useState(false);

  const updateCameraName = useCallback(async (name: string, rowKey: string) => {
    setLoading(true);
    const updatedData = [...data];
    const updatedRow = updatedData.find(({id}) =>  id === rowKey);
    if(updatedRow && name.length > 0) {

      updatedRow.cameraName = name;
      // Database wait example
      await sleep(2000);
      setData(updatedData);
    }
    setLoading(false);
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
          {customComponent: <EditCell defaultValue={cameraName} rowKey={id} saveCallback={updateCameraName} loading={loading}/>},
          { text: jobTime},
          { text: statusText, status },
          { text: temperature },
        ]
      })
      return row;
    })
  
    return newRows;
  },[updateCameraName, loading])

  /**
   * If data is updated the table will be rebuild
   */

  useEffect(() => {
    const dataRows : ITypeTableData = buildDataRows(data);
    setRows(dataRows);
    return () => {
      setRows([])
    }
  }, [data, buildDataRows]);

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