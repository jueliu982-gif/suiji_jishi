export interface DataItem {
  type: number,
  title: string,
  list: Array<{id: number | string, name: number | string}>
}