import { Component, Input } from '@angular/core';
import { SidebarPositions } from '@app/shared/enums/sidebar-positions';

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
