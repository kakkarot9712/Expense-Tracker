import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpenseModel } from "src/app/shared/expense.model";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-info-card',
    templateUrl: './expense-info-card.component.html',
    styleUrls: ['./expense-info-card.component.css']
})

export class ExpenseInfoCard {
    @Input('expenseData')expense: ExpenseModel
    constructor(){}
}
