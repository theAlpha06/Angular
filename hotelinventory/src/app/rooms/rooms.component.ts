import { Component, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

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
  title = 'Room List';
  hideRooms = false;

  roomList: RoomList[] = [];

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; //recomended way

  selectedRoom!: RoomList;
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerComponent)
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
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 104,
      roomType: 'Economy',
      amenities: ['TV'],
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      checkinTime: new Date('2020-01-01T10:00:00'),
      checkoutTime: new Date('2020-01-01T12:00:00')
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  ngDoCheck() {
    console.log('on changes is called')
  }

  ngAfterViewInit() {
    console.log(this.headerComponent)
  }
}

//do not implement ngOnChanges and ngDoCheck on same component
// try to avoid ngDoCheck as much as possible