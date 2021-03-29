import TypeTable from './molecules/TypeTable';
import TableRowThumbnail from './atoms/TableRowThumbnail';
import EditCell from './molecules/EditCell';
import { ReactElement } from 'react';

export type TypeCellStyle = 'firstColumn' | 'lowImportance' | 'normalImportance' | 'highImportance' ;
export type TypeCellAlignment = 'left' | 'center' | 'right';

export interface TableHeaders {
  columnHeaders: TableHeaderItem[]
  showSelectAll?: boolean
}

export interface TableHeaderItem {
  name: string
  type: 'string' | 'tags' | 'image' // Thinking we use this to enforce those different kinds of things we put in the tables.
  sortable?: boolean
}

export interface ITableColumnConfig {
  header: string
  sortable: boolean
  cellStyle: TypeCellStyle
  alignment?: TypeCellAlignment
  showUnit?: boolean
  showStatus?: boolean
  hasCopyButton?: boolean
  width?: number // TODO: This!
}

export type IDeviceStatus = 'caution' | 'danger' | 'folder' | 'good' | 'neutral';

export interface ICellData {
  text?: string
  href?: string
  unit?: string
  status?: IDeviceStatus;
  customComponent?: ReactElement
}
export interface IRowHeader {
  status?: any
  image?: string
  icon?: string
}

export interface IRowData {
  _checked?: boolean
  id?: number | string
  header?: IRowHeader
  columns: ICellData[]
}

export type ITypeTableData = IRowData[]

export {
  TypeTable,
  TableRowThumbnail,
  EditCell,
};