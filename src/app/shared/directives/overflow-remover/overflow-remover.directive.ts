import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[appOverflowRemover]' })
export class OverflowRemoverDirective implements OnChanges {
  @Input() hasOpenedSidebar: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnChanges() {
    if (this.hasOpenedSidebar) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(this.document.body, 'overflow', 'auto');
    }
  }
}
