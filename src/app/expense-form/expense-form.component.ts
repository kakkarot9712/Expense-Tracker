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
  editMode = false
  editIndex = -1

  expenseName: string
  expenseAmount: string
  expenseDate: string

  constructor(private expenseservice: ExpenseService) { }

  ngOnInit(): void {
    this.expenseservice.editExpenseIndex.subscribe((index)=>{
      this.formActivated = true
      this.editMode = true
      this.editIndex = index
      let expenseTOLoad: ExpenseModel = this.expenseservice.getExpense(index)
      this.expenseName = expenseTOLoad.expenseName
      this.expenseAmount = expenseTOLoad.expenseAmount

      let dateToLoad = new Date(`${expenseTOLoad.expenseDate.month} ${expenseTOLoad.expenseDate.day} ${expenseTOLoad.expenseDate.year}`)
      this.expenseDate = `${dateToLoad.getFullYear()}-${dateToLoad.toLocaleString('default', {month: '2-digit'})}-${dateToLoad.toLocaleString('default', {day:'2-digit'})}`
    })
  }

  addExpensewizardHandler(){
    this.formActivated = true
  }

  onSubmitHandler(form: NgForm){
    let currentdate = new Date(form.value.expenseDate)
    if(currentdate.getFullYear() < 2018 || currentdate.getFullYear() > 2022){
      alert('Date inputs for year less than 2018 and greater than 2022 is not supported! please change the date')
      return
    }  
    let newExpense: ExpenseModel = {
        expenseName: form.value.expenseName,
        expenseAmount: form.value.expenseAmount,
        expenseDate: {
          day: currentdate.getDate().toString(),
          month: currentdate.toLocaleString('default', {month: 'short'}),
          year: currentdate.toLocaleString('default', {year: 'numeric'})
        }
      }

    if(!this.editMode){
      this.expenseservice.addExpense(newExpense)
    }
    else{
      this.expenseservice.replaceExpense(this.editIndex, newExpense)
    }
    form.reset()
    this.formActivated = false
    this.editMode = false
    this.editIndex = -1
  }

  cancelForm(){
    this.formActivated = false
  }
}
