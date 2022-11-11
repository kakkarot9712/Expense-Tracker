import { Directive, ElementRef, Input, HostBinding, OnInit } from '@angular/core'


@Directive({
    standalone: true,
    selector: "[fillGraph]",
})

export class GraphFiller implements OnInit {
    @Input('fillGraph')fillWidth: string
    @HostBinding('style.height')setHeight: string
    constructor(){
    }

    ngOnInit(): void {
        this.setHeight = this.fillWidth
    }
}
