export const multiplyList = <T>(multiplier: number, list: T[]): T[] => {
  const newList: T[] = [];
  for (let i = 0; i < multiplier; i++) {
    newList.push(...list);
  }
  return newList;
};
