import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListComponent } from './components/people-list.component';
import { PeopleService } from './services/people.service';
import { NgxsModule } from '@ngxs/store';
import { PeopleState } from './state/people.state';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature(
      [
        PeopleState
      ]
    )
  ],
  declarations: [
    PeopleListComponent
  ],
  exports: [
    PeopleListComponent
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleListModule { }
