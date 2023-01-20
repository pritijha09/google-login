import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

}
