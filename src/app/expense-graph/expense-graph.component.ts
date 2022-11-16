import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { transition, animate, style, trigger } from '@angular/animations';

import { GraphFiller } from './graph-filler.directive';
import { ExpenseService } from '../shared/expense.service';
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
    ]),
  ])]
})

export class ExpenseGraphComponent implements OnInit, OnDestroy {
  maxAmount = 0
  expenseObs: Subscription
  yearObs: Subscription
  activeYear: string
  MONTH_AMOUNTS = {}

  onCompare(_right: KeyValue<any, any>,_left: KeyValue<any, any>): number {
    return 1;
  }

  constructor(private expenseservice: ExpenseService) {}

  ngOnInit(): void {
    this.yearObs = this.expenseservice.currentYear.subscribe(year=>{
      this.activeYear = year
      this.updateMonthRatios()
      this.setMaxHeight()
    })

    this.expenseObs = this.expenseservice.expenseChanged.subscribe(()=>{
      this.updateMonthRatios()  
      this.setMaxHeight()
    })
  }

  updateMonthRatios(){
    this.setHeightPercentToZero()
    this.expenseservice.getFilteredExpenses(this.activeYear).forEach(expense=>{
        this.MONTH_AMOUNTS[expense.expenseDate.month] += +expense.expenseAmount
      })
    }

  calculatePercent(amt: number){
    return `${amt/this.maxAmount * 100}%`;
  }
  
  setMaxHeight(){
    this.maxAmount = 0
    this.expenseservice.getMonths().forEach(month=>{
      if(this.MONTH_AMOUNTS[month] > this.maxAmount){
        this.maxAmount = this.MONTH_AMOUNTS[month]
      }
    })
  }

  setHeightPercentToZero(){
    this.expenseservice.getMonths().forEach(month=>{this.MONTH_AMOUNTS[month]=0})
  }

  ngOnDestroy(): void {
    this.yearObs.unsubscribe()
    this.expenseObs.unsubscribe()
  }
}
