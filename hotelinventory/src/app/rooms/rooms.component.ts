import { Component, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hotelinventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
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
  hideRooms = true;

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  // @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; //recomended way

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); this is how we initialize a class but to use dependency injection we should not do it, rather do this
  //always make services private
  //this instance will not leak into the template or anywhere else but ts file

  //SkipSelf() will skip the current component and will look for the service in parent component although angular internally uses blurfilter to check where the services is used and it is pretty fast

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
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
    // this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.forEach((child) => {
      child.title = 'Rooms';
    })
  }

}

//do not implement ngOnChanges and ngDoCheck on same component
// try to avoid ngDoCheck as much as possible