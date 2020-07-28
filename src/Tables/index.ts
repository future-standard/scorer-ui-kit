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
  hasCopyButton?: boolean
  width?: number // TODO: This!
}
// interface ITableRow {
//   text: string
//   unit?: string
// }
export interface ICellData {
  text: string
  href?: string
  unit?: string
}
export type IRowData = ICellData[]
export type ITypeTableData = IRowData[]



// import PageTitle from './atoms/PageTitle';
// import IntroductionText from './atoms/IntroductionText';
import TypeTable from './molecules/TypeTable';

export {
    // PageTitle,
    // IntroductionText,
    TypeTable
};