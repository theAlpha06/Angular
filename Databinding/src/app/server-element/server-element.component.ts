import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('Contructor called!')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }

}
