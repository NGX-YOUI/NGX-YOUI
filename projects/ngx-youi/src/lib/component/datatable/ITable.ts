export interface ITable<T> {
  columns: ITableColumn[],
  tableData: T[],
  selectedList? : Set<T>,
  rowCSSClassFn?: Function,
  rowSelectDisableFn?: Function,
  
}

export interface ITableColumn {
  name: string,
  label: string
}

export interface ITableSelected<T> {
  targetData: T,
  isSelected: boolean,
  allSelectedData: Set<T>
}