export interface ICodeTab {
  expanded: boolean,
  examples: ICodeTabExample[]
} 

export interface ICodeTabExample {
  title: string,
  code: string
}