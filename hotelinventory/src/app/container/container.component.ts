import { Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinventory-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent {
  //container components will use the instance of services only
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  constructor() {

  }
  ngAfterContentInit(): void {
    this.employee.employee = 'Singh';
  }

}
