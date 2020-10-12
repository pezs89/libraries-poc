import { Component, Input } from '@angular/core';
import { NavLink } from '@app/shared/models/nav-link';

@Component({
  selector: 'app-main-navigation',
  templateUrl: 'main-navigation.component.html',
})
export class MainNavigationComponent {
  @Input() navLinks: NavLink[];
}
