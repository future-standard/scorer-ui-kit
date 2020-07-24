type TypeCellStyle = 'firstColumn' | 'lowImportance' | 'normalImportance' | 'highImportance' ;
type TypeCellAlignment = 'left' | 'center' | 'right';

interface TableHeaders {
  columnHeaders: TableHeaderItem[]
  showSelectAll?: boolean
}

interface TableHeaderItem {
  name: string
  type: 'string' | 'tags' | 'image' // Thinking we use this to enforce those different kinds of things we put in the tables.
  sortable?: boolean
}

interface ITableColumnConfig {
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
interface ICellData {
  text: string
  unit?: string
}
type IRowData = ICellData[]
type ITypeTableData = IRowData[]
