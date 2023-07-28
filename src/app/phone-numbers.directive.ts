import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneNumbersDirective {

  
  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/[^0-9\s]/g, '');
    if (trimmed.length > 3 && trimmed.length <= 6) {
      trimmed = trimmed.substring(0, 3) + '-' + trimmed.substring(3);
    } else if (trimmed.length > 6) {
      trimmed = trimmed.substring(0, 3) + '-' + trimmed.substring(3, 6) + '-' + trimmed.substring(6, 10);
    }
    input.value = trimmed.substring(0, 12);
  }

}
