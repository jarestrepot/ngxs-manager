import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ChatState } from './state/chat.state';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    ChatComponent,
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChatRoutingModule,
    NgxsModule.forFeature(
      [
        ChatState
      ]
    )
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
