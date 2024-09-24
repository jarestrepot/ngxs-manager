import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './modules/people-list/components/people-list.component';

const routes: Routes = [
  {
    path: 'people-list',
    component: PeopleListComponent,
    loadChildren: () => import('./modules/people-list/people-list.module').then(m => m.PeopleListModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'people-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
