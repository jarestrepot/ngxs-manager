import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../model/person';

@Injectable()
export class PeopleService {

  // Datos
  public people: Person[] = [
    {
      name: "Fernando",
      surname: "Ureña",
      age: 33
    },
    {
      name: "Hernando",
      surname: "Caballero",
      age: 20
    },
    {
      name: "Bernando",
      surname: "Torres",
      age: 45
    },
    {
      name: "Orlando",
      surname: "Reyes",
      age: 51
    }
  ];

  constructor() { }

  fetchPeople(name: string){
    // Filtramos los elementos
    // Con of, creamos un observable a partir del array
    return of<Person[]>(this.people.filter(p => p.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())));
  }

}
