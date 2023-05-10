import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hotelinventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //inline template
  // template: `<h1>Hello World from inline template</h1>`,
  // styles: [`
  //   h1 {
  //     color: red;
  //   }
  // `]
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Admin';


//Loading components dynamically ka function hai yeh which is defined at 'hotelinventory\src\app\app.component.html' line no 17

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 44;
  // }
}
