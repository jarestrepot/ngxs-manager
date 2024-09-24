import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetPeople } from './modules/people-list/state/people.actions';
import { WebSocketService } from './core/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public socketStatus = false;
  constructor(
    private store: Store,
    private wsService: WebSocketService
  ) {
    // Socket conection

    // First data request and stored in Storage Manager
    this.store.dispatch(new GetPeople());
  }
}
