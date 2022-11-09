import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  formActivated = false
  constructor() { }

  ngOnInit(): void {
  }

  addExpensewizardHandler(){
    this.formActivated = true
  }

  onSubmitHandler(form: NgForm){
    console.log(form)
  }

  cancelForm(){
    this.formActivated = false
  }
}
