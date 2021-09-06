import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";

import {TypeTable, ModalProvider} from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';
import {
  IRowData,
  ITableColumnConfig,
  ITypeTableData,
  IDeviceStatus,
} from 'scorer-ui-kit/dist/Tables';

const Container = styled.div`
  padding: 100px;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: []
};


interface IExampleData  {
  id: string
  deviceName: string
  deviceLink: string
  status: IDeviceStatus
  statusText: string
  created: string
  totalTime: string
  usage: number
  usageUnit: string
  cost: number
}


/** Imagine this data comes from Server :) */
const defaultData : IExampleData[] = [
  {
    id: 'device-1',
    deviceName: 'Device Name',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: 'Just Now',
    totalTime: '00:10:10',
    usage: 242,
    usageUnit: 'mb',
    cost: 20000,
  },
  {
    id: 'device-2',
    deviceName: 'Another Device',
    deviceLink: '',
    status: 'danger',
    statusText: 'Warning',
    created: '1st October 2019',
    totalTime: '00:40:12',
    usage: 2.1,
    usageUnit: 'gb',
    cost: 4000,
  },
  {
    id: 'device-3',
    deviceName: 'Old Device',
    deviceLink: '#',
    status: 'danger',
    statusText: 'Warning',
    created: '22nd March 2020',
    totalTime: '00:70:00',
    usage: 2.1,
    usageUnit: 'tb',
    cost: 7000,
  },
  {
    id: 'device-4',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '00:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-5',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'caution',
    statusText: 'Caution',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-6',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-7',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-8',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'neutral',
    statusText: 'Offline',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-9',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-10',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    totalTime: '01:30:00',
    created: '2nd April 2020',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-11',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
]

const sortDataBy = (unsortedData : IExampleData[] , columnId : keyof IExampleData, ascending: boolean) => {
  return unsortedData.sort((itemA, itemB) => {

    /** This is added because typescript complained about object keys */
    const valueA  = itemA[columnId];
    const valueB  = itemB[columnId];

    if(!valueA) {return 0;}
    if(!valueB) {return 0;}
    /** ---- */

    if(valueA > valueB) {
      return ascending ? 1 : -1 ;
    }
    return ascending ? -1 : 1 ;
  })
}

const sortedByDeviceData = sortDataBy(defaultData, 'deviceName', true);


const rowMaker = (rowData: IExampleData[]) : ITypeTableData=> {
  const newRows : ITypeTableData = rowData.map( ({
    id,
    deviceName,
    deviceLink,
    status,
    statusText,
    created,
    totalTime,
    usage,
    usageUnit,
    cost
  }) => {

    const yenCost = `¥${cost}`
    const row : IRowData =  ({
      id,
      header: {
        image: photo,
        mediaUrl: photo,
        mediaType: 'img',
        icon: 'Location',
        status,
      },
      columns: [
        { text: deviceName, href: deviceLink },
        { text: statusText, status},
        { text: created },
        { text: totalTime},
        { text: `${usage}`, unit: usageUnit },
        { text: yenCost},
      ]
    })
    return row;
  })
  return newRows;
}

const columnConfigSample : ITableColumnConfig[] = [
  {
    columnId: 'deviceName',
    groupTitle: 'Device',
    header: 'Device Name',
    sortable: true,
    sortActive: true,
    cellStyle: 'firstColumn',
  },
  {
    columnId: 'status',
    groupTitle: 'Device',
    header: 'Status',
    sortable: true,
    showStatus: true,
    cellStyle: 'normalImportance',
  },
  {
    columnId: 'created',
    groupTitle: 'Device',
    header: 'Created',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center',
    hasCopyButton: true
  },
  {
    columnId: 'run',
    groupTitle: 'Time',
    header: 'Total Run Time',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'left',
    hasCopyButton: true
  },
  {
    columnId: 'usage',
    header: 'Usage',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment: 'right',
    showUnit: true
  },
  {
    columnId: 'cost',
    header: 'Cost',
    sortable: true,
    cellStyle: 'highImportance',
    alignment: 'right',
    hasCopyButton: true
  }
];

export const _TypeTable = () => {

  const [data, setData] = useState<IExampleData[]>(sortedByDeviceData);
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
    const unsortedData : IExampleData[] = [...data];

    const validKey = columnId as keyof IExampleData;
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