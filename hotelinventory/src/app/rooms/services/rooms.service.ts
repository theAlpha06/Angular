import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() {
    //we get a single instatnce of service
    console.log('room service inititalized');
  }

  roomList : RoomList[] = [
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

  getRooms() {
    return this.roomList;
  }

}
