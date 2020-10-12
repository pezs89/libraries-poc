import { Component, Input } from '@angular/core';
import { LoggedUser } from '@app/shared/models/logged-user-info';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: 'logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss'],
})
export class LoggedUserInfoComponent {
  @Input() loggedUser: LoggedUser;
}
