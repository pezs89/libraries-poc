import { Component, Input } from '@angular/core';
import { NavLink } from '@app/shared/models/nav-link';

@Component({
  selector: 'app-link',
  templateUrl: 'link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() navLink: NavLink;
}
