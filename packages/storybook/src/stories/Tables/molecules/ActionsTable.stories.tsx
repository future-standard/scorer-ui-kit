import { boolean, number, object } from '@storybook/addon-knobs';
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

const Container = styled.div<{ $width: number }>`
  padding: 100px;
  ${({ $width }) => $width > 0 && `width: ${$width}px;`}
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
    minWidth: 200,
  },
  {
    header: 'Job Created At',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 160,
  },
  {
    header: 'Run Time',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 120,
  },
  {
    header: 'Status',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 120,
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

const handleDelete = (deviceId: string) => {
  console.debug(`Running deleting job log for device:  ${deviceId}`);
  onDelete();
};

const handleRetry = (deviceId: string) => {
  console.debug(`Retrying job for device:  ${deviceId}`);
  onRetry();
};

const handleDownloadVideo = (deviceId: string) => {
  console.debug(`Download video of device:  ${deviceId}`);
  onDownloadVideo();
};

const handleDownloadLogs = (deviceId: string) => {
  console.debug(`Dowload job log for device:  ${deviceId}`);
  onDownloadLogs();
};

const handleConfigJob = (deviceId: string) => {
  console.debug(`Config analysis job for device:  ${deviceId}`);
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
      icon: 'Play',
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
      icon: 'Play',
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
      icon: 'Play',
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
  const hasTypeIcon = boolean('Has Type Icon', true);
  const selectable = boolean('Selectable Rows', true);
  const containerWidth = number('Container Width (px, 0 = fill)', 0);
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
    <Container $width={containerWidth}>
      <ModalProvider>
        <TypeTableCustom
          {...{
            columnConfig,
            rows,
            selectable,
            selectCallback,
            toggleAllCallback,
            hasThumbnail,
            hasTypeIcon,
          }}
        />
      </ModalProvider>
    </Container>
  );
};

export default ActionsTableStory;
