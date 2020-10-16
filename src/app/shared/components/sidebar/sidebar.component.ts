import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SidebarPositions } from '@app/shared/enums/sidebar-positions';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnChanges {
  @Input() position = SidebarPositions.LEFT;
  @Input() sidebarIdentifier: string;
  @Input() forceOpen: boolean;
  @Input() shouldForceOpen: boolean;
  @Output() sidebarHidden = new EventEmitter<void>();
  @Output() sidebarOpen = new EventEmitter<string>();
  sidebarVisible = false;

  showSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnChanges() {
    this.sidebarVisible = this.forceOpen;
  }

  onShow() {
    if (this.shouldForceOpen) {
      this.sidebarOpen.emit(this.sidebarIdentifier);
    }
  }
}
