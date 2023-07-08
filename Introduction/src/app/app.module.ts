import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//bootstrap: which component you shouold be aware of at the time the whole application starts basically this is the root component
// the new component should be registered here and they are done in @NgModule and in declaration
// imports simply allows us to add other modules (when working with splited modules)
