import {Directive, HostBinding, HostListener, ElementRef} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  /* Срабатывает когда мы нажимаем на выпадающий список
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
   */

  // Закрывает список, когда мы нажимаем на любую область на экране
  @HostListener('document:click', ['$event']) toggleOpenForDocument(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
