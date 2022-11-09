import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ExpenseInfoCard } from './expense-info-card/expense-info-card-component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ExpenseInfoCard],
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.css']
})
export class ExpenseDisplayComponent implements OnInit {
  YEARS = ['2022', '2021', '2020', '2019', '2018']
  selectedYear: string
  constructor() { 
    this.selectedYear = '2022'
  }

  ngOnInit(): void {
  }

}
