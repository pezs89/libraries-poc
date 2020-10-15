import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NavTab } from '@app/shared/models/tab';

@Component({
  selector: 'app-nav-tab',
  templateUrl: 'nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTabsComponent {
  @Input() navItem: NavTab;
  @Input() isLastItem: boolean;
  @Input() isActive: boolean;
  @Output() closeTab = new EventEmitter<NavTab>();
  @Output() changeRoute = new EventEmitter<string>();

  navigateTo(route: string) {
    this.changeRoute.emit(route);
  }

  removeTab() {
    this.closeTab.emit(this.navItem);
  }
}
