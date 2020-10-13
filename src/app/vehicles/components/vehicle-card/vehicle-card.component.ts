import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vehicle } from '@app/vehicles/models/vehicles';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: 'vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleCardComponent {
  @Input() vehicle: Vehicle;
}
