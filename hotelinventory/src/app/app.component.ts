import { Component } from '@angular/core';

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
}
