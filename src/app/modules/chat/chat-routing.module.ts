import { RouterModule, Routes } from "@angular/router";
import { ChatComponent } from "./components/chat/chat.component";
import { NgModule } from "@angular/core";


export const routerChat: Routes = [
  {
    path: 'send',
    component: ChatComponent
  },
  {
    path: '**',
    redirectTo: 'send',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routerChat)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}

