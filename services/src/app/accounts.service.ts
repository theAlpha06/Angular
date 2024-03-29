import { LoggingService } from "./logging/logging.service";
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
// We need to use @Injectable decorator if we are injecting any other service into a particular service. But it is not required to do the same if we are not injecting any other service into it. Although, it is recommended to add @Injectable decorator to all services.
export class AccountsService  {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor (private loggingService: LoggingService) {}

  statusUpdated = new EventEmitter<string>();
  
  addAccount (name: string, status: string ) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }
  updateStatus (id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}