import { Component, Input, OnInit } from '@angular/core';
import { SidebarPositions } from '../enums/sidebar-positions';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  @Input() position = SidebarPositions.LEFT;
  sidebarVisible = false;

  showSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
