import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[zipCodeFormat]'
})
export class ZipCodeFormatDirective {

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '');

    if (sanitizedValue !== value) {
      input.value = sanitizedValue;
    }

    if (sanitizedValue.length > 6) {
      input.value = sanitizedValue.substring(0, 6);
    }
  }

}
