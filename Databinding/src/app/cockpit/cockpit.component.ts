import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: serverContentInput.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: nameInput.value, serverContent: serverContentInput.value });
  }
}
