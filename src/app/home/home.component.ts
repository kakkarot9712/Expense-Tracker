import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseGraphComponent } from '../expense-graph/expense-graph.component';
import { ExpenseDisplayComponent } from '../expense-display/expense-display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ExpenseFormComponent, ExpenseGraphComponent, ExpenseDisplayComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
