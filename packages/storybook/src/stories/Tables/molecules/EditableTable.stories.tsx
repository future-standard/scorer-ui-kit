import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
// import { object } from "@storybook/addon-knobs";


import {TypeTable as EditableTable,
  EditCell,
  ModalProvider,
} from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';
import {sleep} from '../../helpers';

import {
  IRowData,
  IDeviceStatus,
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
    header: 'Job Number',
    sortable: false,
    cellStyle: 'firstColumn',
  },
  {
    header: 'Camera Name',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment:'left',
  },
  {
    header: 'When',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment:'center',
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
  jobName: string,
  cameraName: string,
  jobTime: string,
  status: IDeviceStatus,
  statusText: string,
  temperature: string,
}
const sampleData: IExampleData[] = [
  {
    id: 'device-1',
    jobName: 'capture123',
    cameraName: 'Camera1',
    jobTime: 'Just Now',
    status: 'good',
    statusText: 'OK',
    temperature: '38.2ºC',
  },
  {
    id: 'device-2',
    jobName: 'capture234',
    cameraName: 'Camera2',
    jobTime: 'Just Now',
    status: 'good',
    statusText: 'OK',
    temperature: '38.2ºC',
  },
  {
    id: 'device-3',
    jobName: 'capture345',
    cameraName: 'Camera3',
    jobTime: '3 mins ago',
    status: 'danger',
    statusText: 'Warning',
    temperature: '38.2ºC',
  },
  {
    id: 'device-4',
    jobName: 'capture456',
    cameraName: 'Camera4',
    jobTime: '12 mins ago',
    status: 'danger',
    statusText:'Warning',
    temperature: '38.2ºC',
  }
];

export const _EditableTable = () => {
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);
  // const columnConfig = object('ColumConfig', columnConfigSample);

  const updateCameraName = useCallback(async (name: string, rowKey: string) => {
    const updatedData = [...data];
    const updatedRow = updatedData.find(({id}) =>  id === rowKey);
    if(updatedRow && name.length > 0) {

      updatedRow.cameraName = name;
      // Database wait example
      await sleep(3000);
      setData(updatedData);
    }
  },[data]);

  const buildDataRows = useCallback((data : IExampleData[]) : ITypeTableData =>  {
    const newRows : ITypeTableData = data.map(({id, jobName, cameraName, jobTime, status, statusText, temperature}) => {
      const row : IRowData =  ({
        id,
        header: {
          image: photo,
          mediaUrl: photo,
          mediaType: 'img',
        },
        columns:
        [ {text: jobName },
          {customComponent: <EditCell alignment={'left'} defaultValue={cameraName} rowKey={id} saveCallback={updateCameraName} toLink='/'/>},
          { text: jobTime},
          { text: statusText, status },
          { text: temperature },
        ]
      })
      return row;
    })

    return newRows;
  },[updateCameraName])

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

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      {/* <ModalProvider>
        <EditableTable columnConfig={[]} {...{
          // columnConfig: columnConfig,
          rows,
          hasThumbnail: true,
        }} />
      </ModalProvider> */}
    </Container>
  )
};