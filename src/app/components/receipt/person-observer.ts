import { Person } from "./person";


export interface PersonObserver {
  onPersonsChanged(persons: Person[]): void;
}
