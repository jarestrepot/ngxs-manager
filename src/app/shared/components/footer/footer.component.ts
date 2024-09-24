import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { WebSocketService } from 'src/app/core/services/web-socket.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isConected: boolean = false;
  private destroy$: Subject<void> = new Subject();
  constructor(private wsService: WebSocketService) {

  }
  ngOnInit(): void {
    this.wsService.socketStatus$
      .pipe(
        tap((socKetStatus) => this.isConected = socKetStatus),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
