import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { ChatBasicInterface } from 'src/app/modules/chat/model/chat.basic.interface';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private socket: Socket) {
    this.checkStatus();
  }


  checkStatus() {
    this.socket.on('connect', () => {
      this.socketStatus$.next(true);
    });


    this.socket.on('disconnect', () => {
      this.socketStatus$.next(false);
    });
  }

  emitAnyData<T>(event: string, payload?: T, callback?: Function) {
    // emit('EVENTO', payload, callback?)
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent<ChatBasicInterface>(event);
  }
}
