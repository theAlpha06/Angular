import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hotelinventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Highland Inn';
  numberOfRooms = 10;
  rooms: Room = {
    totalRooms: 20,
    bookedRooms: 5,
    availableRooms: 10,
  }
  hideRooms = false;
  
  roomList: RoomList[] = [];
  
  selectedRoom!: RoomList;
  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Deluxe',
        amenities: ['TV', 'AC', 'Wifi'],
        price: 2000,
        photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('2020-01-01T10:00:00'),
        checkoutTime: new Date('2020-01-01T12:00:00')
      },
      {
        roomNumber: 102,
        roomType: 'Standard',
        amenities: ['TV', 'AC'],
        price: 1500,
        photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('2020-01-01T10:00:00'),
        checkoutTime: new Date('2020-01-01T12:00:00'),
      },
      {
        roomNumber: 103,
        roomType: 'Economy',
        amenities: ['TV'],
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('2020-01-01T10:00:00'),
        checkoutTime: new Date('2020-01-01T12:00:00'),
      }
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
