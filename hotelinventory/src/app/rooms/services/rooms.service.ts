import { Injectable, Inject } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
//What if we need to use the environment variables in multiple files?
//This is where the value providers comes into picture.
// import { environment } from  '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    //we get a single instatnce of service
    console.log('room service inititalized');
    console.log(config.apiEndpoint);
    // console.log(environment.apiEndpoint)
  }

  roomList: RoomList[] = [];

  //Value provides makes object as a service like using apis

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
        reportProgress: true,
    });
    return this.http.request(request);
  }
  
}
