import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Subscription } from 'rxjs';
import { ExpenseModel } from '../shared/expense.model';
import { ExpenseService } from '../shared/expense.service';
import { ExpenseInfoCard } from './expense-info-card/expense-info-card-component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ExpenseInfoCard],
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.css']
})
export class ExpenseDisplayComponent implements OnInit, OnDestroy{
  YEARS = ['2022', '2021', '2020', '2019', '2018']
  selectedYear: string;
  FilteredExpenses: ExpenseModel[];
  expenseChangeObs: Subscription;

  constructor(private expenservice: ExpenseService) { 
    this.selectedYear = '2022'
    this.FilteredExpenses = this.expenservice.getFilteredExpenses(this.selectedYear)
  }

  filterExpenses(){
    this.expenservice.currentYear.next(this.selectedYear)
    this.FilteredExpenses = this.expenservice.getFilteredExpenses(this.selectedYear)
  }

  ngOnInit(): void {
    this.expenseChangeObs = this.expenservice.expenseChanged.subscribe(response => {
      this.FilteredExpenses = this.expenservice.getFilteredExpenses(this.selectedYear)
    })
  }

  ngOnDestroy(): void {
    this.expenseChangeObs.unsubscribe()
  }
}
