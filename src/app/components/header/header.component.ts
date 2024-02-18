import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output()
  togglePanel: EventEmitter<boolean>;

  constructor() {
    this.togglePanel = new EventEmitter<boolean>();
  }


  toggle() {
    this.togglePanel.emit(true);
  }
}
