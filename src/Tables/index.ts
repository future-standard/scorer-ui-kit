import TypeTable from './molecules/TypeTable';
import TableRowThumbnail from './atoms/TableRowThumbnail';
import { ReactElement } from 'react';

export type TypeCellStyle = 'firstColumn' | 'lowImportance' | 'normalImportance' | 'highImportance' ;
export type TypeCellAlignment = 'left' | 'center' | 'right';


//**  I think this is not in use Leonard can I delete? **//
export interface TableHeaders {
  columnHeaders: TableHeaderItem[]
  showSelectAll?: boolean
}

//**  I think this is not in use Leonard can I delete? **//
//** Not sure if you wanted to do an abstraction of HeaderRow later on */
export interface TableHeaderItem {
  name: string
  type: 'string' | 'tags' | 'image' // Thinking we use this to enforce those different kinds of things we put in the tables.
  sortable?: boolean
}

export interface ITableColumnConfig {
  columnId?: string
  header: string
  sortable?: boolean
  ascending?: boolean
  sortActive?: boolean
  cellStyle: TypeCellStyle
  alignment?: TypeCellAlignment
  showUnit?: boolean
  showStatus?: boolean
  hasCopyButton?: boolean
  width?: number // TODO: This!
}

export interface ICellData {
  text?: string
  href?: string
  unit?: string
  status?: 'caution' | 'danger' | 'folder' | 'good' | 'neutral';
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
  TableRowThumbnail
};