import React, {useCallback, useReducer, useEffect} from 'react';
import styled from 'styled-components';
import { TypeTable, PageHeader, Content } from 'scorer-ui-kit';
import { ITableColumnConfig, ITypeTableData } from '../../../src/Tables';


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

const rows : ITypeTableData = [
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
    id: 'device-id-2',
    columns:
    [
      { text: 'Another Device', href: '#' },
      { text: '1st October 2019' },
      { text: '2.1', unit: 'gb' },
      { text: '¥4,000'}
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

const initialState = {selected: []};

const reducer = (state : any, action : any) => {
  const {type, id} = action;
  const {selected} = state;

  switch (type) {
    case 'add':
      if( selected.indexOf(id) === -1 ){
        selected.push(id);
      }
      break;
    case 'remove':
      if( selected.indexOf(id) !== -1 ){
        selected.splice( selected.indexOf(id), 1 );
      }
      break;
    default:
      throw new Error();
  }

  return {selected: selected};
}

const TablePage : React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((event: any, id?: string | number) => {
    if(event.target.checked){
      dispatch({type: 'add', ...{id}})
    } else {
      dispatch({type: 'remove', ...{id}})
    }
  }, [dispatch]);

  return <Container>
    <Content>
      <PageHeader title="Table Example" />
      <TypeTable selectable={true} {...{columnConfig, rows, selectCallback}} />
      <SelectRows>Selected IDs: [{state.selected.toString()}]</SelectRows>
    </Content>
  </Container>
};

export default TablePage;