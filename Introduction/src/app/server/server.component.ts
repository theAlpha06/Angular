import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
}