import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './modules/people-list/components/people-list.component';

const routes: Routes = [
  { path: 'people-list', component: PeopleListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'people-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
