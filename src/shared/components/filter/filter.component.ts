import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public name: string = '';

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onFilter() {
    this.filter.emit(this.name);
  }

}
