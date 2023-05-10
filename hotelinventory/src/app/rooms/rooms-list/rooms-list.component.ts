import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'hotelinventory-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  constructor() { }



}
