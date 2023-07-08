import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  userName = '';
  validInput = false;

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  onInputData () {
    if (this.userName !== '') {
      this.validInput = true;
    } else {
      this.validInput = false;
    }
  }
  handleClick () {
    this.userName = '';
    this.validInput = false;
  }
}
