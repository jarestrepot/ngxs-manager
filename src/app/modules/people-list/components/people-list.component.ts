import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Person } from '../model/person';
import { GetPeople, GetPeopleByName } from '../state/people.actions';
import { PeopleState } from '../state/people.state';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // Selector asociado a la propiedad people del estado
  @Select(PeopleState.people)
  private readonly people$: Observable<Person[]>;

  @Select(PeopleState.loading)
  private readonly loading$: Observable<boolean>;

  @Select(PeopleState.filteredPeople)
  private readonly filteredPeople$: Observable<Person[]>;

  public peopleFiltered: Person[] = [];
  public loadingPerson: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit() {
    this.fetchPeople();
    this.filter();
    this.filteredPeople$.pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (person: Person[]) => this.peopleFiltered = person
        }
      )
  }

  fetchPeople() {
    // Nos subscribimos para estar pendiente de los cambios de la propiedad
    this.people$
      .subscribe({
        next: (people: Person[]) => {
          // this.peopleFiltered = this.store.selectSnapshot(PeopleState.people);
          this.peopleFiltered = people;
        }
      });

    this.loading$.subscribe({
      next: () => {
        this.loadingPerson = this.store.selectSnapshot(PeopleState.loading);
      }
    })
  }

  filter(name: string = '') {
    // Activo la acción
    this.store.dispatch(new GetPeopleByName({ name }));
  }

}
