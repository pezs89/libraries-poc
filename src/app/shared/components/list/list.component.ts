import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> {
  @Input() list: T;

  @ContentChild('cardTemplate', { static: false })
  cardTemplateRef: TemplateRef<any>;
}
