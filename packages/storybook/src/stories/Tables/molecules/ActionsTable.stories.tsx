import { boolean, object } from '@storybook/addon-knobs';
import { type ReactElement, useCallback, useState } from 'react';
import {
  ActionButtons,
  type IconButtonData,
  ModalProvider,
  MultilineContent,
  TypeTable as TypeTableCustom,
} from 'scorer-ui-kit';
import type { ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import photo from '../../assets/placeholder.jpg';

const Container = styled.div`
  padding: 100px;
`;

const TimeText = styled.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`;

const ActionsTableStory = {
  title: 'Tables/molecules',
  component: TypeTableCustom,
  decorators: [],
};

const columnConfigSample: ITableColumnConfig[] = [
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
    alignment: 'right',
  },
];

const onDelete = action('Deleting..');
const onDownloadVideo = action('Downloading video..');
const onDownloadLogs = action('Downloading logs');
const onRetry = action('Retry');
const onConfig = action('Going to config page');

const handleDelete = (_deviceId: string) => {
  onDelete();
};

const handleRetry = (_deviceId: string) => {
  onRetry();
};

const handleDownloadVideo = (_deviceId: string) => {
  onDownloadVideo();
};

const handleDownloadLogs = (_deviceId: string) => {
  onDownloadLogs();
};

const handleConfigJob = (_deviceId: string) => {
  onConfig();
};

const generateConfigButtons = (rowId: string): IconButtonData[] => {
  return [
    {
      icon: 'RetryJob',
      onClick: () => {
        handleRetry(rowId);
      },
    },
    {
      icon: 'Delete',
      onClick: () => {
        handleDelete(rowId);
      },
    },
    {
      icon: 'DownloadVideo',
      onClick: () => {
        handleDownloadVideo(rowId);
      },
    },
    {
      icon: 'Download',
      onClick: () => {
        handleDownloadLogs(rowId);
      },
    },
    {
      icon: 'ViewSettings',
      onClick: () => {
        handleConfigJob(rowId);
      },
    },
  ];
};

const generateTimeRows = (initTime: string, endTime: string): ReactElement[] => {
  return [
    <TimeText key='start'>{`${initTime} ${String.fromCharCode(160)} →`}</TimeText>,
    <TimeText key='end'>
      {endTime}
      <span>{` JST`}</span>
    </TimeText>,
  ];
};

const initialRows: ITypeTableData = [
  {
    id: 'row1',
    header: {
      image: photo,
      mediaUrl: photo,
      mediaType: 'img',
    },
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/06/11 - 16:00', '2020/06/11 - 21:30')}
          />
        ),
      },
      { customComponent: <div style={{ fontStyle: 'italic' }}>Just Now</div> },
      { text: `00:00:12` },
      { text: `Complete` },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device1')} /> },
    ],
  },
  {
    id: 'row2',
    header: {
      image: photo,
      mediaUrl: photo,
      mediaType: 'img',
    },
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/06/11 - 13:00', '2020/06/11 - 17:30')}
          />
        ),
      },
      { text: `2020/06/11 - 17:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device2')} /> },
    ],
  },
  {
    id: 'row3',
    header: {
      image: photo,
      mediaUrl: photo,
      mediaType: 'img',
    },
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/05/10 - 10:00', '2020/05/10 - 12:30')}
          />
        ),
      },
      { text: `2020/05/10 - 12:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device2')} /> },
    ],
  },
];

export const ActionsTable = () => {
  const hasThumbnail = boolean('Has Thumbnail', true);
  const selectable = boolean('Selectable Rows', true);
  const columnConfig = object('Column Configuration', columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const toggleAllCallback = useCallback(
    (checked: boolean) => {
      const newRows = [...rows];

      newRows.forEach((row) => {
        row._checked = checked;
      });

      setRows(newRows);
    },
    [rows]
  );

  const selectCallback = useCallback(
    (checked: boolean, id?: string | number) => {
      const newRows = [...rows];
      const targetRowIndex = newRows.findIndex((row) => row.id === id);
      newRows[targetRowIndex]._checked = checked;

      setRows(newRows);
    },
    [rows]
  );

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <TypeTableCustom
          {...{
            columnConfig,
            rows,
            selectable,
            selectCallback,
            toggleAllCallback,
            hasThumbnail,
          }}
        />
      </ModalProvider>
    </Container>
  );
};

export default ActionsTableStory;
