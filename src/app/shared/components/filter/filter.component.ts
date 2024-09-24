import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SetLoading } from 'src/app/modules/people-list/state/people.actions';
import { PeopleState } from 'src/app/modules/people-list/state/people.state';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  public name: string = '';
  public stateSearch: boolean = false;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Select(PeopleState.loading)
  private loading$: Observable<boolean>;
  private destroy$ = new Subject<void>();


  constructor(
    private store: Store
  ) { }
  ngOnInit(): void {
    this.loading$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (loading) => console.log(loading)
    })
  }

  onFilter() {
    this.filter.emit(this.name);
    this.store.dispatch(new SetLoading(false));
  }
  loadingSerach() {
    if (this.name.length > 0) {
      this.store.dispatch(new SetLoading(true));
    }
  }
}
