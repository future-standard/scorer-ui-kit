import React, {useState, useCallback, ReactElement} from 'react';
import styled from 'styled-components';
import { object, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';


import {
TypeTable as TypeTableCustom,
ActionButtons,
IconButtonData,
MultilineContent,
} from 'scorer-ui-kit';
import photo from '../../assets/placeholder.jpg';
import { 
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';

const Container = styled.div`
  padding: 100px;
`;

const TimeText = styled.div`
  font-size: 12px;
  span {
    font-style: italic;
  }
`;

export default {
  title: 'Tables/molecules',
  component: TypeTableCustom,
  decorators: []
};

const columnConfigSample : ITableColumnConfig[] = [
  {
    header: 'Analysed Range',
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

const onDelete = action('Deleting..');
const onDownloadVideo = action('Downloading video..');
const onDownloadLogs = action('Downloading logs');
const onRetry = action('Retry');
const onConfig = action('Going to config page');

const handleDelete = (deviceId: string) => {
  console.log(`Running deleting job log for device:  ${deviceId}`);
  onDelete();
};

const handleRetry = (deviceId: string) => {
  console.log(`Retrying job for device:  ${deviceId}`);
  onRetry();
};

const handleDownloadVideo = (deviceId: string) => {
  console.log(`Download video of device:  ${deviceId}`);
  onDownloadVideo();
};

const handleDownloadLogs = (deviceId: string) => {
  console.log(`Dowload job log for device:  ${deviceId}`);
  onDownloadLogs();
};

const handleConfigJob = (deviceId: string) => {
  console.log(`Config analysis job for device:  ${deviceId}`);
  onConfig();
};


const generateConfigButtons  = (rowId: string) : IconButtonData[] => {
  return (
    [
      {
        icon: 'RetryJob',
        onClick: () => {handleRetry(rowId)},
      },
      {
        icon: 'Delete',
        onClick: () => {handleDelete(rowId)},
      },
      {
        icon: 'DownloadVideo',
        onClick: () => {handleDownloadVideo(rowId)},
      },
      {
        icon: 'Download',
        onClick: () => {handleDownloadLogs(rowId)},
      },
      {
        icon: 'ViewSettings',
        onClick: () => {handleConfigJob(rowId)},
      },
    ]
  )
}

const generateTimeRows = (initTime: string, endTime: string) : ReactElement[] =>  {
  return (
    [ 
      <TimeText>{`${initTime} ${String.fromCharCode(160)} →`}</TimeText>,
      <TimeText>{endTime}<span>{` JST`}</span></TimeText>
    ]
  )
}

const initialRows : ITypeTableData = [
  {
    id: 'row1',
    header: {
      image: photo,
    },
    columns: [
      {customComponent: <MultilineContent contentArray={generateTimeRows('2020/06/11 - 16:00','2020/06/11 - 21:30')}/>},
      {customComponent: <div style={{fontStyle:'italic'}}>Just Now</div>},
      {text: `00:00:12`},
      {text: `Complete`},
      { customComponent: <ActionButtons buttonsConfig = {generateConfigButtons('device1')}/>},
    ]
  },
  {
    id: 'row2',
    header: {
      image: photo,
    },
    columns: [
      {customComponent: <MultilineContent contentArray={generateTimeRows('2020/06/11 - 13:00','2020/06/11 - 17:30')}/>},
      {text: `2020/06/11 - 17:30`},
      {text: `00:00:12`},
      {text: `Complete`},
      { customComponent: <ActionButtons buttonsConfig = {generateConfigButtons('device2')}/>},
    ]
  },
  {
    id: 'row3',
    header: {
      image: photo,
    },
    columns: [
      {customComponent: <MultilineContent contentArray={generateTimeRows('2020/05/10 - 10:00','2020/05/10 - 12:30')}/>},
      {text: `2020/05/10 - 12:30`},
      {text: `00:00:12`},
      {text: `Complete`},
      { customComponent: <ActionButtons buttonsConfig = {generateConfigButtons('device2')}/>},
    ]
  }
];

export const ActionsTable = () => {
  const hasThumbnail = boolean("Has Thumbnail", true);
  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
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
              toggleAllCallback,
              hasThumbnail,
            }
          } 
        />
      </Container>
      )
};