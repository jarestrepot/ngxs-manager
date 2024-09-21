import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { PeopleState } from 'src/app/modules/people-list/state/people.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forFeature(
      [
        PeopleState
      ]
    )
  ],
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ]
})
export class SharedModule { }
