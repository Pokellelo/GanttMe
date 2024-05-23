import { months } from "./dictionaries";
import { Calendar } from "./types";
const today:Date = new Date()


export const createItems = (year:number = today.getFullYear(), month:number = today.getMonth()): Calendar[] => {
  //const lastDay:number = new Date(year, month+1, 0).getDate()


  const year_array:Calendar = {
    year: year,
    months: []
  }
  
  let days:String[] = []

  for(const m in months[0]){
    const lastDay:number = new Date(year, +m+1, 0).getDate()    
    const days_array:String[] = Array.from( Array(lastDay).keys()).map((x) => (x+1).toString());
    
    days = days.concat(days_array)

    year_array.months.push(days_array)
  }

  return [year_array]
}

export const loadMore = async (year?:number, month?:number): Promise<Calendar[]> =>
  new Promise((res) => setTimeout(() => res(createItems(year, month)), 100));


export const capitalize = (name:string): string => {
  return name
}
