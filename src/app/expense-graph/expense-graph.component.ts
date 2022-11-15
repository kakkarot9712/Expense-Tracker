import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, animate, style, trigger, state } from '@angular/animations';

import { GraphFiller } from './graph-filler.directive';
import { ExpenseService } from '../shared/expense.service';
import { ExpenseModel } from '../shared/expense.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-graph',
  standalone: true,
  imports: [CommonModule, GraphFiller],
  templateUrl: './expense-graph.component.html',
  styleUrls: ['./expense-graph.component.css'],
  animations: [trigger('heightAnim', [
    transition(':enter', [
      style({
        height:0
      }),
      animate(500)
    ])
  ])]
})

export class ExpenseGraphComponent implements OnInit {
  maxAmount: number
  expenseObs: Subscription
  yearObs: Subscription
  activeYear: string
  MONTH_ARRAY = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  MONTH_RATIOS = {}

  constructor(private expenseservice: ExpenseService) { 

    this.yearObs = this.expenseservice.currentYear.subscribe(year=>{
      this.activeYear = year
      this.updateMonthRatios()
    })

    this.expenseObs = this.expenseservice.expenseChanged.subscribe(()=>{
      this.updateMonthRatios()  
    })
  }

  updateMonthRatios(){
    this.setHeightPercentToZero()
    this.maxAmount = this.getMaxHeight()
    this.expenseservice.getFilteredExpenses(this.activeYear).forEach(expense=>{
        this.MONTH_RATIOS[expense.expenseDate.month] = `${this.calculatePercent(+expense.expenseAmount).toString()}%`
      })
  }

  calculatePercent(amt: number){
    return amt/this.maxAmount * 100;
  }
  
  getMaxHeight(){
    if(this.expenseservice.getFilteredExpenses(this.activeYear).length){
      let expenseAmt = this.expenseservice.getFilteredExpenses(this.activeYear).reduce((prevExpense: ExpenseModel, expense: ExpenseModel)=>{
        if(+prevExpense.expenseAmount > +expense.expenseAmount){
          return prevExpense
        }
        return expense
      })
      return +expenseAmt.expenseAmount
    }
    return null
  }

  setHeightPercentToZero(){
    this.MONTH_ARRAY.forEach(month=>{this.MONTH_RATIOS[month]='0%'})
  }

  ngOnInit(): void {}
}
