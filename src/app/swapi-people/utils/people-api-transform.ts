import { Person, PersonApi } from '../models/person';
import { v4 as uuidv4 } from 'uuid';

export const transformPeopleApiResponse = (people: PersonApi[]): Person[] =>
  people.map((person) => ({ uuid: uuidv4(), ...person }));
