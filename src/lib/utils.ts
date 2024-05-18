
export const createItems = (length = 100): string[] =>
  Array.from({ length }).map(() => Math.random().toString());

export const loadMore = async (length = 100): Promise<string[]> =>
  new Promise((res) => setTimeout(() => res(createItems(length)), 100));


export const capitalize = (name:string): string => {
  return name
}

