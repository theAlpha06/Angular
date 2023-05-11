import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
// import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinventory-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //to create other instance of roomsService
  // providers:[RoomsService]
})
export class EmployeeComponent {
  //we get a single instatnce of service
  // constructor(private roomService: RoomsService){}
  employee: string = 'Shubham';
}
