import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat.service';
import { ChatState } from '../../state/chat.state';
import { GetMessages } from '../../state/chat.action';
import { ChatBasicInterface } from '../../model/chat.basic.interface';
import { ChatValidators } from '../../validators/ChatValidators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  private destroy$ = new Subject<void>();
  @Select(ChatState.chats)
  private chats$: Observable<ChatBasicInterface[]>;

  public chatsMessage: ChatBasicInterface[] = [];
  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private store: Store
  ) {
    this.store.dispatch(new GetMessages());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'message': ['', [Validators.required, Validators.minLength(1), ChatValidators.noWhitespaceValidator ]]
    });
    this.chats$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        {
          next: (messages) => {
            this.chatsMessage = messages
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  send(): void {
    if (this.form.invalid || this.form.get('message').value.trim() === '') {
      this.form.markAllAsTouched();
      return;
    }
    this.chatService.sendMessage(this.form.get('message').value);
    this.form.reset();
  }
}
