export class GetPeople {
  // No puede ser igual a otro
  static readonly type = '[People] Get people'; 
  // Parametros necesarios, sino tuviera no seria necesario
  constructor(public payload: { name: string }) { }
}
