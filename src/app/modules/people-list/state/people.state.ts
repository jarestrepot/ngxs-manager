import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Person } from '../model/person';
import { PeopleService } from '../services/people.service';
import { GetPeople, GetPeopleByName, SetLoading } from './people.actions';

// Clase estado
export class PeopleStateModel {
  public people: Person[];
  public filteredPeople: Person[];
  public loading: boolean;
}

// Valores por defecto
const defaults: PeopleStateModel = {
  people: [],
  filteredPeople: [],
  loading: false
};

@State<PeopleStateModel>({
  name: 'people',
  defaults
})
@Injectable()
export class PeopleState {

  // Selectores
  @Selector()
  static people({ people }: PeopleStateModel): Person[] {
    return people;
  }

  @Selector()
  static loading({ loading }: PeopleStateModel): boolean {
    return loading;
  }

  @Selector()
  static filteredPeople({ people, filteredPeople }: PeopleStateModel): Person[] {
    if (filteredPeople.length > 0) return filteredPeople;
    return people;
  }

  constructor(private peopleService: PeopleService) { }
  // Acciones
  @Action(GetPeople)
  getPeople(
    { patchState }: StateContext<PeopleStateModel>
  ) {
    patchState({ loading: true });
    return this.peopleService.fetchPeople()
      .pipe(
        tap((people: Person[]) => {
          // Modificamos la propiedad del estado
          patchState({
            people,
            loading: false,
          });
        })
      )
  }

  @Action(GetPeopleByName)
  getPeopleByName(
    { patchState, getState }: StateContext<PeopleStateModel>,
    { payload }: GetPeopleByName
  ) {
    patchState({ loading: true });
    // Current State
    const state = getState();
    const filteredPeople = state.people.filter(person =>
      person.name.toLowerCase().includes(payload.name.toLowerCase())
    );
    patchState({
      filteredPeople,
      loading: false
    });

  }

  @Action(SetLoading)
  setLoading(
    { patchState }: StateContext<PeopleStateModel>,
    { payload }: SetLoading) {
    patchState({ loading: payload });
  }
}


