import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Person } from '../model/person';
import { PeopleService } from '../services/people.service';
import { GetPeople } from './people.actions';

// Clase estado 
export class PeopleStateModel {
  public people: Person[];
}

// Valores por defecto
const defaults = {
  people: []
};

@State<PeopleStateModel>({
  name: 'people',
  defaults
})
@Injectable()
export class PeopleState {

  // Selectores
  @Selector()
  static people(state: PeopleStateModel){
    return state.people;
  }

  constructor(private peopleService: PeopleService){ }

  // Acciones
  @Action(GetPeople)
  add(
    { setState }: StateContext<PeopleStateModel>, 
    { payload }: GetPeople) {
      return this.peopleService.fetchPeople(payload.name).pipe(
        tap( (people: Person[]) => {
          // Modificamos la propiedad del estado
          setState({
            people
          })
        })
      )
  }
}
