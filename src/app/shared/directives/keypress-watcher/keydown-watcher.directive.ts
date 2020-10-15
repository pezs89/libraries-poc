import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({ selector: '[appKeydownWatcher]' })
export class KeydownWatcherDirective {
  @Input() keys: string[];
  @Input() shouldSetCombinationPressed: boolean;
  @Output() keyDown = new EventEmitter<string>();

  private combinationPressed = false;

  @HostListener('window:keydown', ['$event']) keypressEvent(
    event: KeyboardEvent
  ) {
    this.keydownCheck(event.altKey, event.code);
  }

  private keydownCheck(isAltkeyPressed: boolean, keyCode: string) {
    const key = this.findPressedKey(keyCode);
    if (isAltkeyPressed && !!key) {
      if (!this.combinationPressed) {
        this.keyDown.emit(key);
        this.combinationPressed = true;
      } else {
        this.keyDown.emit(key);
        this.combinationPressed = false;
      }
    }
  }

  private findPressedKey(keyCode: string): string {
    return this.keys.find((key) => key === keyCode.toLowerCase());
  }
}
