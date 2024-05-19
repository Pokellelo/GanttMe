
const today:Date = new Date


export const createItems = (year:number = today.getFullYear(), month:number = today.getMonth()): string[] => {
  const lastDay:number = new Date(year, month+1, 0).getDate()
  return  Array.from( Array(lastDay).keys()).map((x) => (x+1).toString())  
}

export const loadMore = async (year?:number, month?:number): Promise<string[]> =>
  new Promise((res) => setTimeout(() => res(createItems(year, month)), 100));


export const capitalize = (name:string): string => {
  return name
}

