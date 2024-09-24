import { Injectable, OnDestroy } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GetMessages } from "./chat.action";
import { ChatService } from "src/app/core/services/chat.service";
import { Subject, takeUntil } from "rxjs";
import { ChatBasicInterface } from "../model/chat.basic.interface";

export class ChatStateModel {
  public messages: ChatBasicInterface[] = [];
}

const defaults: ChatStateModel = {
  messages: []
}

@State<ChatStateModel>({
  name: 'chat',
  defaults
})
@Injectable()
export class ChatState implements OnDestroy {

  private destroy$ = new Subject<void>();

  @Selector()
  static chats(chats: ChatStateModel) {
    return chats.messages
  }

  constructor(
    private chatService: ChatService
  ) { }

  @Action(GetMessages)
  getMessages(
    { patchState, getState }: StateContext<ChatStateModel>
  ) {
    // Api getaway
    this.chatService.listenersMessage()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        {
          next: (payload) => {
            const state = getState();
            patchState({
              messages: [...state.messages, payload]
            });
          }
        }
      )
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
