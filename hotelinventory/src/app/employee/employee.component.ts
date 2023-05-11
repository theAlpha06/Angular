import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
// import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinventory-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //to create other instance of roomsService
  providers:[RoomsService]
})
export class EmployeeComponent {
  //we get a single instatnce of service
  //by using this self decorator we should get the same instance of service if not we should get error
  //this self makes sure that the dependency resolution checks the proivders in the same component if not found it directly goes to the NullInjectorError
  constructor(@Self() private roomService: RoomsService){}
  employee: string = 'Sunny';
}
