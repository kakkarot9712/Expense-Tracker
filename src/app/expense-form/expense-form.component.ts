import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'
import { ExpenseModel } from '../shared/expense.model';
import { ExpenseService } from '../shared/expense.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  formActivated = false
  constructor(private expenseservice: ExpenseService) { }

  ngOnInit(): void {
  }

  addExpensewizardHandler(){
    this.formActivated = true
  }

  onSubmitHandler(form: NgForm){
    let currentdate = new Date(form.value.expenseDate)
    let newExpense: ExpenseModel = {
      expenseName: form.value.expenseName,
      expenseAmount: form.value.expenseAmount,
      expenseDate: {
        day: currentdate.getDate().toString(),
        month: currentdate.toLocaleString('default', {month: 'short'}),
        year: currentdate.toLocaleString('default', {year: 'numeric'})
      }
    }
    this.expenseservice.addExpense(newExpense)
    form.reset()
  }

  cancelForm(){
    this.formActivated = false
  }
}
