import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core'

@Directive({
    standalone: true,
    selector: '[menuHost]'
})

export class MenuDirective{
    @Input('menuHost')menuElement: HTMLElement
    @HostListener('document:click', ['$event.target']) menuAction(target: HTMLElement){
        if(target===this.element.nativeElement){
            if(this.menuElement.style.transform === 'scale(0)'){
                this.renderer.setStyle(this.menuElement, 'transform', 'scale(1)')
                return
            }
        }
        this.renderer.setStyle(this.menuElement, 'transform', 'scale(0)')
    }
    constructor(private element: ElementRef, private renderer: Renderer2){}
}
