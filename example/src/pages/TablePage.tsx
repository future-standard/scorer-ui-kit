import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import { TypeTable, PageHeader, Content } from 'scorer-ui-kit';
import { ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';


const Container = styled.div`
  margin: 100px 200px;
`

const SelectRows = styled.pre`
  color: #666;
  margin-top: 75px;
  background: #eee;
  padding: 10px;
  white-space: normal;
`

const columnConfig : ITableColumnConfig[] = [
  {
    header: 'Device Name',
    sortable: true,
    cellStyle: 'firstColumn',
  },
  {
    header: 'Created',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center'
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
  }
];

const initialRows : ITypeTableData = [
  {
    id: 'device-id-1',
    columns:
    [
      { text: 'Device Name', href: '#' },
      { text: 'Just Now' },
      { text: '242', unit: 'mb' },
      { text: '¥20,000'}
    ]
  },
  {
    _checked: true,
    id: 'device-id-2',
    columns:
    [
      { text: 'Another Device', href: '#' },
      { text: '1st October 2019' },
      { text: '2.1', unit: 'gb' },
      { text: '¥4,000' }
    ],
  },
  {
    id: 'device-id-3',
    columns:
    [
      { text: 'Old Device', href: '#' },
      { text: '22nd March 2020' },
      { text: '2.1', unit: 'tb' },
      { text: '¥7,000'}
    ],
  },
  {
    id: 'device-id-4',
    columns:
    [
      { text: 'Magic Edge Cloud', href: '#' },
      { text: '2nd April 2020' },
      { text: '153', unit: 'mb' },
      { text: '¥25,000' }
    ]
  }
];


const TablePage : React.FC = () => {

  const [rows, setRows] = useState<ITypeTableData>(initialRows)

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

  return <Container>
    <Content>
      <PageHeader title="Table Example" areaTitle="Examples" areaHref={'/'} />
      <TypeTable selectable={true} {...{columnConfig, rows, selectCallback, toggleAllCallback}} />
      <SelectRows>Selected IDs: [{checkedRowIDs(rows).toString()}]</SelectRows>
    </Content>
  </Container>
};

const checkedRowIDs = (rows : ITypeTableData) => {
  const ids : number|string[] = [];

  rows.forEach((row) => {
    if(row._checked && row.id){
      ids.push(row.id.toString());
    }
  });

  return ids;

}

export default TablePage;