import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '@app/swapi-people/models/person';

@Component({
  selector: 'app-people-card',
  templateUrl: 'people-card.component.html',
  styleUrls: ['./people-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleCardComponent {
  @Input() person: Person;
}
