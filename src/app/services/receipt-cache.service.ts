import { Injectable } from '@angular/core';
import { PersonObserver } from '../components/receipt/person-observer';
import { Person } from '../components/receipt/person';

@Injectable({
  providedIn: 'root'
})
export class ReceiptCacheService {
  private _persons: Person[] = [];
  private _personObservers: PersonObserver[] = [];

  constructor() { }

  addObservator(personObserver: PersonObserver) {
    this._personObservers.push(personObserver);
  }

  getPersons(): Person[] {
    return [...this._persons];
}

  setPersons(persons: Person[]) {
    this._persons = persons;
    this._personObservers.forEach(p => p.onPersonsChanged(this._persons))
  }

  addPerson(person: Person) {
    this._persons.push(person);
    this._personObservers.forEach(p => p.onPersonsChanged(this._persons))
  }
}
