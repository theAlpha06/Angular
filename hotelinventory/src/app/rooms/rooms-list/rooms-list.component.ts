import { Component, ChangeDetectionStrategy, SimpleChange } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Room, RoomList } from '../rooms';
//ngOnchages can only be applied to components that have inputs declared
@Component({
  selector: 'hotelinventory-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChange): void {
    // console.log(changes);
    // if(changes['title']) {
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  constructor() { }
}
