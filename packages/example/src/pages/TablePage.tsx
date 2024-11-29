import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { TypeTable, PageHeader, Content, useModal, SplitButton } from 'scorer-ui-kit';
import { ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';
import { StatusComponent } from '../components/StatusComponent';
import ExamplesFilename from '../components/ExamplesFilename';

const Container = styled.div`
  margin: 100px 200px;
`

const SelectRows = styled.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`

const columnConfig: ITableColumnConfig[] = [
  {
    header: 'Device Name',
    sortable: true,
    cellStyle: 'firstColumn',
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
    header: 'Status',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment: 'center',
  },
  {
    header: 'Actions',
    sortable: false,
    cellStyle: 'highImportance',
    alignment: 'right',
  }
];

const TablePage: React.FC = () => {

  const { createModal } = useModal();

  const openCustomModal = useCallback((id: string) => {
    console.log(`opening custom modal for item ${id}`);
    createModal({
      closeText: 'Close',
      isCloseEnable: true,
      customComponent: <PageHeader
        title='Example of custom component on Modal'
        introductionText="Anything can be added inside de modal, I hope you find this modal useful" />
    });
  }, [createModal]);

  const buttonList = useMemo(() => [
    { id: 'a0', text: 'Main Action', icon: 'Success', onClickCallback: () => { } },
    { id: 'a1', text: '日本語の場合はランダム', onClickCallback: () => { } },
    { id: 'a2', text: 'Save Action', icon: 'Analyse', hasOnSelectLoading: true, onClickCallback: () => { } },
    { id: 'a3', text: 'Download Action', icon: 'Download', onClickCallback: () => { }, disabled: true },
  ], [])

  const initialRows: ITypeTableData = useMemo(() => [
    {
      id: 'device-id-1',
      header: {
        image: "https://picsum.photos/id/43/367/267",
        mediaUrl: "/scorer-ui-kit/traffic.mp4",
        mediaType: 'video',
      },
      columns:
        [
          { text: 'Device Name', href: '#' },
          { text: 'Just Now' },
          { text: '242', unit: 'mb' },
          { text: '¥20,000' },
          { customComponent: <StatusComponent statusList={[{ type: 'success' }, { type: 'success' }, { type: 'success' }]} /> },
          { customComponent: <SplitButton mainButtonId={'a0'} buttonList={buttonList} /> },
        ]
    },
    {
      _checked: true,
      id: 'device-id-2',
      header: {
        image: "/scorer-ui-kit/images/cityscape.jpg",
        mediaUrl: "/scorer-ui-kit/images/cityscape.jpg",
        mediaType: 'img',
        onClickThumbnail: () => openCustomModal('device-id-2'),
      },
      columns:
        [
          { text: 'Another Device', href: '#' },
          { text: '1st October 2019' },
          { text: '2.1', unit: 'gb' },
          { text: '¥4,000' },
          {
            customComponent:
              <StatusComponent
                statusList={
                  [
                    { type: 'error', tooltipIcon: 'BigWarning', tooltipType: 'warning', tooltipMessage: '4 Images have reported upload failures', tooltipPosition: 'left' },
                    { type: 'warning', tooltipIcon: 'Information', tooltipType: 'neutral', tooltipMessage: '1 images file is corrupted', tooltipPosition: 'bottom' },
                    { type: 'info', tooltipIcon: 'Information', tooltipType: 'info', tooltipMessage: 'All Images have been updated in the server', tooltipPosition: 'right' },
                  ]} />
          },
          { customComponent: <SplitButton mainButtonId={'a0'} buttonList={buttonList} /> },
        ],
    },
    {
      id: 'device-id-3',
      header: {
        image: "/scorer-ui-kit/images/cityscape.jpg",
        mediaUrl: "/scorer-ui-kit/images/cityscape.jpg",
        mediaType: 'img'
      },
      columns:
        [
          { text: 'Old Device', href: '#' },
          { text: '22nd March 2020' },
          { text: '2.1', unit: 'tb' },
          { text: '¥7,000' },
          { customComponent: <StatusComponent statusList={[{ type: 'warning', tooltipIcon: 'Information', tooltipType: 'neutral', tooltipMessage: 'Upload took too long' }, { type: 'neutral' }, { type: 'neutral' }]} /> },
          { customComponent: <SplitButton mainButtonId={'a0'} buttonList={buttonList} /> },
        ],
    },
    {
      id: 'device-id-4',
      header: {
        image: "/scorer-ui-kit/images/cityscape.jpg",
        mediaUrl: "/scorer-ui-kit/images/cityscape.jpg",
        mediaType: 'img'
      },
      columns:
        [
          { text: 'Magic Edge Cloud', href: '#' },
          { text: '2nd April 2020' },
          { text: '153', unit: 'mb' },
          { text: '¥25,000' },
          { customComponent: <StatusComponent statusList={[{ type: 'neutral' }, { type: 'neutral' }, { type: 'neutral' }]} /> },
          { customComponent: <SplitButton mainButtonId={'a0'} buttonList={buttonList} /> },
        ]
    },
    {
      id: 'device-id-5',
      columns:
        [
          { text: 'Special Camera', href: '#' },
          { text: '16th June 2020' },
          { text: '153', unit: 'mb' },
          { text: '¥25,000' },
          { customComponent: <StatusComponent statusList={[{ type: 'neutral' }, { type: 'neutral' }, { type: 'neutral' }]} /> },
          { customComponent: <SplitButton mainButtonId={'a0'} buttonList={buttonList} /> },
        ]
    },
  ], [buttonList, openCustomModal]);

  const [rows, setRows] = useState<ITypeTableData>(initialRows)

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {

    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id)
    newRows[targetRowIndex]._checked = checked;

    setRows(newRows);

  }, [rows, setRows]);

  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    setRows(newRows);
  }, [rows, setRows]);

  return <Container>
    <ExamplesFilename>TablePage.tsx</ExamplesFilename>
    <Content>
      <PageHeader title="Table Example" areaTitle="Examples" areaHref={'/'} />
      <TypeTable selectable={true} {...{ columnConfig, rows, selectCallback, toggleAllCallback, hasThumbnail: true }} />
      <SelectRows>Selected IDs: [{checkedRowIDs(rows).toString()}]</SelectRows>
    </Content>
  </Container>
};

const checkedRowIDs = (rows: ITypeTableData) => {
  const ids: number | string[] = [];

  rows.forEach((row) => {
    if (row._checked && row.id) {
      ids.push(row.id.toString());
    }
  });

  return ids;

}

export default TablePage;