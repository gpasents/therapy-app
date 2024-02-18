import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {
  @Input()
  isSidebarOpen: boolean = false;

  @Output()
  onClose: EventEmitter<boolean>;

  constructor() {
    this.onClose = new EventEmitter<boolean>();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.onClose.emit(true);
  }
}
