import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  changeRoute(route: string) {
    this.router.navigateByUrl(route);
  }
}
