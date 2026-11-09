import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps, ReactElement } from 'react';
import {
  ActionButtons,
  type IconButtonData,
  type ITableColumnConfig,
  type ITypeTableData,
  ModalProvider,
  MultilineContent,
  TypeTable,
} from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import photo from '../../assets/placeholder.jpg';

const TimeText = styled.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`;

const columnConfigSample: ITableColumnConfig[] = [
  { header: 'Analysed Range', sortable: false, cellStyle: 'normalImportance', minWidth: 200 },
  { header: 'Job Created At', sortable: false, cellStyle: 'normalImportance', minWidth: 160 },
  { header: 'Run Time', sortable: false, cellStyle: 'normalImportance', width: 120 },
  { header: 'Status', sortable: false, cellStyle: 'normalImportance', minWidth: 120 },
  { header: 'Actions', sortable: false, cellStyle: 'normalImportance', alignment: 'right' },
];

const onRetry = fn();
const onDelete = fn();
const onDownloadVideo = fn();
const onDownloadLogs = fn();
const onConfig = fn();

const generateConfigButtons = (deviceId: string): IconButtonData[] => [
  { icon: 'RetryJob', onClick: () => onRetry(deviceId) },
  { icon: 'Delete', onClick: () => onDelete(deviceId) },
  { icon: 'DownloadVideo', onClick: () => onDownloadVideo(deviceId) },
  { icon: 'Download', onClick: () => onDownloadLogs(deviceId) },
  { icon: 'ViewSettings', onClick: () => onConfig(deviceId) },
];

const generateTimeRows = (initTime: string, endTime: string): ReactElement[] => [
  <TimeText key='start'>{`${initTime} ${String.fromCharCode(160)} →`}</TimeText>,
  <TimeText key='end'>
    {endTime}
    <span>{` JST`}</span>
  </TimeText>,
];

const rowHeader = { image: photo, mediaUrl: photo, mediaType: 'img' as const, icon: 'Play' };

const initialRows: ITypeTableData = [
  {
    id: 'row1',
    header: rowHeader,
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/06/11 - 16:00', '2020/06/11 - 21:30')}
          />
        ),
      },
      { customComponent: <div style={{ fontStyle: 'italic' }}>Just Now</div> },
      { text: '00:00:12' },
      { text: 'Complete' },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device1')} /> },
    ],
  },
  {
    id: 'row2',
    header: rowHeader,
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/06/11 - 13:00', '2020/06/11 - 17:30')}
          />
        ),
      },
      { text: '2020/06/11 - 17:30' },
      { text: '00:00:12' },
      { text: 'Complete' },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device2')} /> },
    ],
  },
  {
    id: 'row3',
    header: rowHeader,
    columns: [
      {
        customComponent: (
          <MultilineContent
            contentArray={generateTimeRows('2020/05/10 - 10:00', '2020/05/10 - 12:30')}
          />
        ),
      },
      { text: '2020/05/10 - 12:30' },
      { text: '00:00:12' },
      { text: 'Complete' },
      { customComponent: <ActionButtons buttonsConfig={generateConfigButtons('device2')} /> },
    ],
  },
];

type Args = ComponentProps<typeof TypeTable> & {
  containerWidth: number;
  onRetry: (deviceId: string) => void;
  onDelete: (deviceId: string) => void;
  onDownloadVideo: (deviceId: string) => void;
  onDownloadLogs: (deviceId: string) => void;
  onConfig: (deviceId: string) => void;
};

const meta = {
  title: 'Tables/molecules/ActionsTable',
  component: TypeTable,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
  argTypes: {
    containerWidth: { name: 'Container width (px, 0 = fill)' },
  },
  args: {
    containerWidth: 0,
    columnConfig: columnConfigSample,
    rows: initialRows,
    selectable: true,
    hasThumbnail: true,
    hasTypeIcon: true,
    hasStatus: false,
    hasHeaderGroups: false,
    defaultAscending: false,
    isLoading: false,
    loadingText: 'Loading Data...',
    emptyTableTitle: '',
    emptyTableText: '',
    closeText: '',
    selectCallback: fn(),
    toggleAllCallback: fn(),
    sortCallback: fn(),
    onRetry,
    onDelete,
    onDownloadVideo,
    onDownloadLogs,
    onConfig,
  },
  render: function Render({
    containerWidth,
    onRetry: _retry,
    onDelete: _delete,
    onDownloadVideo: _video,
    onDownloadLogs: _logs,
    onConfig: _config,
    ...args
  }) {
    const [{ rows: rowsArg }, updateArgs] = useArgs<Args>();
    const rows = rowsArg ?? [];

    const selectCallback = (checked: boolean, id?: string | number) => {
      args.selectCallback?.(checked, id);
      updateArgs({
        rows: rows.map((row) => (row.id === id ? { ...row, _checked: checked } : row)),
      });
    };

    const toggleAllCallback = (checked: boolean) => {
      args.toggleAllCallback?.(checked);
      updateArgs({ rows: rows.map((row) => ({ ...row, _checked: checked })) });
    };

    return (
      <div style={{ width: containerWidth > 0 ? `${containerWidth}px` : undefined }}>
        <TypeTable
          {...args}
          rows={rows}
          selectCallback={selectCallback}
          toggleAllCallback={toggleAllCallback}
        />
      </div>
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
