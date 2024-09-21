export class GetPeople {
  // No puede ser igual a otro
  static readonly type = '[People] Get people';
  // Parametros necesarios, sino tuviera no seria necesario
  constructor() {}
}

export class GetPeopleByName {
  // No puede ser igual a otro
  static readonly type = '[People] Get peopleByName';
  // Parametros necesarios, sino tuviera no seria necesario
  constructor(public payload: { name: string }) { }
}


export class SetLoading {
  static readonly type = '[People] Set loading';
  constructor(public payload: boolean) { }
}
