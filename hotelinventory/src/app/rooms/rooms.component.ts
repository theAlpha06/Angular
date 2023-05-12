import { Component, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

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

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete(); // complte the stream
    // observer.error('error');
  });

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  // @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; //recomended way

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); this is how we initialize a class but to use dependency injection we should not do it, rather do this
  //always make services private
  //this instance will not leak into the template or anywhere else but ts file

  //SkipSelf() will skip the current component and will look for the service in parent component although angular internally uses blurfilter to check where the services is used and it is pretty fast

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (error) => console.log(error)
    }
    )
    this.stream.subscribe((data) => {
      console.log(data)
    })
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    })
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
      roomNumber: '104',
      roomType: 'Economy',
      amenities: ['TV'],
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      checkinTime: new Date('2020-01-01T10:00:00'),
      checkoutTime: new Date('2020-01-01T12:00:00')
    }
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
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

// JS uses pull architechture i.e. 
// getData -> addData -> getData

// Angular uses push architechture i.e. (change detection)
// getData -> continuous stream of data -> addData(RxJS)
// the stream is pushing the latest data to the component