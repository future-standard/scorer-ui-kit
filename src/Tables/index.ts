import TypeTable from './organisms/TypeTable';
import TableRowThumbnail from './atoms/TableRowThumbnail';
import TableHeaderTitle from './atoms/TableHeaderTitle';
import EditCell from './molecules/EditCell';
import { ReactElement } from 'react';
import { IMediaType } from '..';

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
  groupTitle?: string
  header: string
  sortable?: boolean
  sortActive?: boolean
  cellStyle: TypeCellStyle
  alignment?: TypeCellAlignment
  showUnit?: boolean
  showStatus?: boolean
  hasCopyButton?: boolean
  width?: number // TODO: This!
  minWidth?: number
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
  mediaUrl?: string
  mediaType?: IMediaType
  retryImageLoad?: boolean;
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
  TableHeaderTitle,
  EditCell,
};