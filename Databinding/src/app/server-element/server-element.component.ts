import { Component, ContentChild, ElementRef, Input,  OnInit,  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };

  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }


}
