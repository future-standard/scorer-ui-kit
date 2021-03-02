import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";

import {TypeTable, Button} from 'scorer-ui-kit';
import photo from '../assets/placeholder.jpg';
import { 
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

const Container = styled.div`
  padding: 100px;
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
    header: 'Status',
    sortable: true,
    showStatus: true,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Created',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center',
    hasCopyButton: true
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
  {
    header: 'Delete Device',
    sortable: true,
    cellStyle: 'normalImportance',
    alignment: 'right',
  },
  
  // {
  //   // TODO: For things like buttons
  //   cellStyle: 'action',
  //   alignment: 'right',
  // }
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
    id: 'device-1',
    header: {
      image: photo,
      icon: 'Zone',
      status: 'neutral'
    },
    columns:
    [
      { text: 'Device Name', href: '#' },
      { text: 'OK', status: 'good' },
      { text: 'Just Now' },
      { text: '242', unit: 'mb' },
      { text: '¥20,000'},
      { customComponent: <DeleteButton deviceId='device-1'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-2',
    header: {
      image: photo,
      icon: 'Location',
      status: 'good'
    },
    columns:
    [
      { text: 'Another Device', href: '#' },
      { text: 'Warning', status: 'danger' },
      { text: '1st October 2019' },
      { text: '2.1', unit: 'gb' },
      { text: '¥4,000'},
      { customComponent: <DeleteButton deviceId='device-2'>Delete</DeleteButton>},
    ],
  },
  {
    id: 'device-3',
    header: {
      image: photo,
      icon: 'Location',
      status: 'good'
    },
    columns:
    [
      { text: 'Old Device', href: '#' },
      { text: 'Warning', status: 'danger' },
      { text: '22nd March 2020' },
      { text: '2.1', unit: 'tb' },
      { text: '¥7,000'},
      { customComponent: <DeleteButton deviceId='device-3'>Delete</DeleteButton>},
    ],
  },
  {
    id: 'device-4',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-4'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-5',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'Caution', status: 'caution' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-5'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-6',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-6'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-7',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-7'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-8',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'Offline', status: 'neutral' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-8'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-9',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-9'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-10',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-10'>Delete</DeleteButton>},
    ]
  },
  {
    id: 'device-4',
    header: {
      image: photo,
      icon: 'Location',
      status: 'danger'
    },
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: 'OK', status: 'good' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' },
      { customComponent: <DeleteButton deviceId='device-4'>Delete</DeleteButton>},
    ]
  }
];

export const _TypeTable = () => {

  const [rows, setRows] = useState<ITypeTableData>(initialRows)

  // To implement...
  const hasStatus = boolean("Has Device Status", true);
  const hasThumbnail = boolean("Has Thumbnail", true);
  const hasTypeIcon = boolean("Has Device Type Icon", true);

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