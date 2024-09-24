import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { CONSTANTES_CORE } from 'src/app/global/constantes';
import { ChatBasicInterface } from 'src/app/modules/chat/model/chat.basic.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly message: string = CONSTANTES_CORE.chat.message;
  private readonly newMessage: string = CONSTANTES_CORE.chat.new_message
  constructor(
    private wsService: WebSocketService,
  ) { }

  sendMessage(body: string) {
    const payload: ChatBasicInterface = {
      from: 'Javier',
      body
    };

    this.wsService.emitAnyData<ChatBasicInterface>(this.message, payload);
  }

  listenersMessage() {
    return this.wsService.listen(this.newMessage);
  }
}
