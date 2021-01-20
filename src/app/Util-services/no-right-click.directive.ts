import { Directive, HostListener } from '@angular/core';
declare var $:any;
@Directive({
  selector: '[appNoRightClick]'
})
export class NoRightClickDirective {

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    alert('not allowed');
    
    window.oncontextmenu = function () {
      return false;
  }
  $(document).keydown(function (event) {
      if (event.keyCode == 123) {
          return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73))
      {
        return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode == 74))
        {
          return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode == 67))
      {
          return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode == 99))
      {
          return false;
      }
      
  });
  }

  
  constructor() { }

}