import { v4 as uuidv4 } from 'uuid';

export const uuidGenerator = <T>(items: T[]): T[] =>
  items.map((item) => ({ uuid: uuidv4(), ...item }));
