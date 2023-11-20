import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  private isShown: boolean = false;

  @HostListener('click') toggleOpen() {
    if (this.isShown) {
      this.renderer.removeClass(
        this.elRef.nativeElement.nextElementSibling,
        'show'
      );
    } else {
      this.renderer.addClass(
        this.elRef.nativeElement.nextElementSibling,
        'show'
      );
    }
    this.isShown = !this.isShown;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
