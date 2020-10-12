import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
  @Input() item: T;
  @Input() isOdd: boolean;
  @ContentChild('cardInnerTemplate', { static: false })
  cardInnerTemplateRef: TemplateRef<any>;
}
