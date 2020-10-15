import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { SidebarPositions } from '@app/shared/enums/sidebar-positions';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnChanges {
  @Input() position = SidebarPositions.LEFT;
  @Input() sidebarIdentifier: string;
  @Input() forceOpen: boolean;
  @Output() sidebarHidden = new EventEmitter<void>();
  @Output() sidebarOpen = new EventEmitter<string>();
  sidebarVisible = false;

  showSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnChanges() {
    this.sidebarVisible = this.forceOpen;
  }
}
