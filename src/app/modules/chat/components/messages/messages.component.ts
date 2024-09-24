import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChatBasicInterface } from '../../model/chat.basic.interface';

@Component({
  selector: 'chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements AfterViewInit, AfterViewChecked {
  @Input() messages!: ChatBasicInterface[];
  @ViewChild('chatMessage') containerMessage: ElementRef<HTMLDivElement>;
  private isScrolling: boolean = false;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  ngAfterViewChecked(): void {
    if (!this.isScrolling) {
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    try {
      this.containerMessage.nativeElement.scrollTo({
        top: this.containerMessage.nativeElement.scrollHeight,
        behavior: 'smooth'
      });
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  onScroll(): void {
    const { scrollTop, scrollHeight, clientHeight } = this.containerMessage.nativeElement;
    this.isScrolling = !(scrollHeight - scrollTop === clientHeight);
  }
}
