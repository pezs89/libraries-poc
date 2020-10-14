import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Pagination } from '@app/shared/models/pagination';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> implements OnInit {
  readonly paginationInitConfig = {
    first: 0,
    page: 0,
    rows: 12,
    pageCount: 12,
  };

  @Input() list: T[];
  @Input() listLength: number;
  @Output() paginationChange = new EventEmitter<Pagination>();

  @ContentChild('cardTemplate', { static: false })
  cardTemplateRef: TemplateRef<any>;

  ngOnInit() {
    this.paginationChange.emit(this.paginationInitConfig);
  }

  onPageChange($event: Pagination) {
    this.paginationChange.emit($event);
  }
}
