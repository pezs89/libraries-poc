import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Email } from '@app/core/models/email';

@Component({
  selector: 'app-email',
  templateUrl: 'email.component.html',
  styleUrls: ['./email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent {
  @Input() email: Email;
}
