import { PersonApi } from '@app/swapi-people/models/person';

export const multiplyList = (
  multiplier: number,
  personList: PersonApi[]
): PersonApi[] => {
  const newList: PersonApi[] = [];
  for (let i = 0; i < multiplier; i++) {
    newList.push(...personList);
  }
  return newList;
};
