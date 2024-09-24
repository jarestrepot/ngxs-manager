import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListModule } from './modules/people-list/people-list.module';
import { CONSTANTES_CORE } from './global/constantes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

const configSoketIo: SocketIoConfig = CONSTANTES_CORE.config_sockets;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PeopleListModule,
    SharedModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'people-list',
      disabled: false,
    }),
    HttpClientModule,
    SocketIoModule.forRoot(configSoketIo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
