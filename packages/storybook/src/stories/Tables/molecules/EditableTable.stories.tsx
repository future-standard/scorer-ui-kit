import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useCallback, useEffect, useState } from 'react';
import {
  EditCell,
  type IDeviceStatus,
  type IRowData,
  type ITableColumnConfig,
  type ITypeTableData,
  TypeTable,
  useBreakpoints,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import photo from '../../assets/placeholder.jpg';
import { sleep } from '../../helpers';

const columnConfigSample: ITableColumnConfig[] = [
  { header: 'Job Number', sortable: false, cellStyle: 'firstColumn' },
  { header: 'Camera Name', sortable: false, cellStyle: 'normalImportance', alignment: 'left' },
  { header: 'When', sortable: false, cellStyle: 'normalImportance', alignment: 'center' },
  { header: 'Status', sortable: false, cellStyle: 'normalImportance', showStatus: true },
  {
    columnId: 'uptime',
    header: 'Uptime',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center',
  },
  { header: 'Temperature', sortable: false, cellStyle: 'normalImportance', showStatus: true },
];

interface IExampleData {
  id: string;
  jobName: string;
  cameraName: string;
  jobTime: string;
  status: IDeviceStatus;
  statusText: string;
  uptime: string;
  temperature: string;
}

const sampleData: IExampleData[] = [
  {
    id: 'device-1',
    jobName: 'capture123',
    cameraName: 'Camera1',
    jobTime: 'Just Now',
    status: 'good',
    statusText: 'OK',
    uptime: '3d 14h',
    temperature: '38.2ºC',
  },
  {
    id: 'device-2',
    jobName: 'capture234',
    cameraName: 'Camera2',
    jobTime: 'Just Now',
    status: 'good',
    statusText: 'OK',
    uptime: '12h 40m',
    temperature: '38.2ºC',
  },
  {
    id: 'device-3',
    jobName: 'capture345',
    cameraName: 'Camera3',
    jobTime: '3 mins ago',
    status: 'danger',
    statusText: 'Warning',
    uptime: '5d 2h',
    temperature: '38.2ºC',
  },
  {
    id: 'device-4',
    jobName: 'capture456',
    cameraName: 'Camera4',
    jobTime: '12 mins ago',
    status: 'danger',
    statusText: 'Warning',
    uptime: '18h 05m',
    temperature: '38.2ºC',
  },
];

type Args = ComponentProps<typeof TypeTable> & {
  saveDelay: number;
  onCameraNameSave: (name: string, rowKey: string) => void;
};

const EditableTableDemo = ({ saveDelay, onCameraNameSave, rows: _rows, ...args }: Args) => {
  const { isXXLarge } = useBreakpoints();
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);
  const columnConfig = isXXLarge
    ? args.columnConfig
    : args.columnConfig.filter(({ columnId }) => columnId !== 'uptime');

  const updateCameraName = useCallback(
    async (name: string, rowKey: string) => {
      onCameraNameSave(name, rowKey);
      if (name.length === 0 || !data.some(({ id }) => id === rowKey)) {
        return;
      }
      // Database wait example
      await sleep(saveDelay);
      setData(data.map((row) => (row.id === rowKey ? { ...row, cameraName: name } : row)));
    },
    [data, onCameraNameSave, saveDelay]
  );

  const buildDataRows = useCallback(
    (data: IExampleData[]): ITypeTableData =>
      data.map(({ id, jobName, cameraName, jobTime, status, statusText, uptime, temperature }) => {
        const row: IRowData = {
          id,
          header: { image: photo, mediaUrl: photo, mediaType: 'img', icon: 'Camera' },
          columns: [
            { text: jobName },
            {
              customComponent: (
                <EditCell
                  alignment='left'
                  defaultValue={cameraName}
                  rowKey={id}
                  saveCallback={updateCameraName}
                  toLink='/'
                />
              ),
            },
            { text: jobTime },
            { text: statusText, status },
            ...(isXXLarge ? [{ text: uptime }] : []),
            { text: temperature },
          ],
        };
        return row;
      }),
    [updateCameraName, isXXLarge]
  );

  /**
   * If data is updated the table will be rebuild.
   *
   * Rebuilding in an effect, rather than deriving rows with useMemo, is what EditCell requires: it
   * reads defaultValue once, so a row object has to be recreated to show an externally changed
   * value. The side effect is that rows lag columnConfig by one render whenever the Uptime column
   * appears or disappears, which is the mismatch TypeTable has to survive.
   */
  useEffect(() => {
    setRows(buildDataRows(data));
    return () => {
      setRows([]);
    };
  }, [data, buildDataRows]);

  return <TypeTable {...args} columnConfig={columnConfig} rows={rows} />;
};

const meta = {
  title: 'Tables/molecules/EditableTable',
  component: TypeTable,
  argTypes: {
    saveDelay: { name: 'Save delay (ms)' },
    rows: {
      control: false,
      table: { defaultValue: { summary: 'built by the story from its sample data' } },
    },
  },
  args: {
    saveDelay: 3000,
    columnConfig: columnConfigSample,
    rows: [],
    hasThumbnail: true,
    selectable: false,
    hasStatus: false,
    hasTypeIcon: false,
    hasHeaderGroups: false,
    defaultAscending: false,
    isLoading: false,
    loadingText: 'Loading Data...',
    emptyTableTitle: '',
    emptyTableText: '',
    closeText: '',
    onCameraNameSave: fn(),
    selectCallback: fn(),
    toggleAllCallback: fn(),
    sortCallback: fn(),
  },
  render: (args) => <EditableTableDemo {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
