import { Component, ElementRef, Input, ViewChild, Renderer2, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpenseModel } from "src/app/shared/expense.model";
import { MenuDirective } from "src/app/shared/menu.directive";
import { ExpenseService } from "src/app/shared/expense.service";

@Component({
    standalone: true,
    imports: [CommonModule, MenuDirective ],
    selector: 'app-info-card',
    templateUrl: './expense-info-card.component.html',
    styleUrls: ['./expense-info-card.component.css'],
})

export class ExpenseInfoCard implements AfterViewInit {
    @ViewChild('menu') menuElem: ElementRef
    @Input('expenseData')expense: ExpenseModel
    @Input('ind')index: number
    constructor(private renderer: Renderer2, private expenseservice: ExpenseService){}

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.menuElem.nativeElement, 'transform', 'scale(0)')
    }

    editEntry(index: number){
        this.expenseservice.editExpense(index)
    }

    deleteEntry(index: number){
        this.expenseservice.deleteExpense(index)
    }
}
