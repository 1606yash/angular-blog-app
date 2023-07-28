import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noNumbers]'
})
export class NoNumbersDirective {

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent){
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    const pattern = /^[a-zA-Z\s]*$/;

    if (!pattern.test(char)) {
      event.preventDefault();
    }
  }

}
