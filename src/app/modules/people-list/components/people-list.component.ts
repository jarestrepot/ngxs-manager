import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { GetPeople } from '../state/people.actions';
import { PeopleState } from '../state/people.state';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // Selector asociado a la propiedad people del estado
  @Select(PeopleState.people)
  people$: Observable<Person[]>;

  public peopleFiltered: Person[] = [];
 
  constructor(private store: Store) { }

  ngOnInit() {
    this.filter();
    this.fetchPeople();
  }

  fetchPeople(){
    // Nos subscribimos para estar pendiente de los cambios de la propiedad
    this.people$.subscribe({
      next: () => {
        this.peopleFiltered = this.store.selectSnapshot(PeopleState.people);
        console.log('People ha cambiado');
        
      }
    })
  }

  filter(name: string = '') {
    // Activo la acción
    this.store.dispatch(new GetPeople({ name }));
  }

}
