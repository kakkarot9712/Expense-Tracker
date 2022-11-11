import { Component } from '@angular/core';
import { ExpenseDisplayComponent } from './expense-display/expense-display.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseGraphComponent } from './expense-graph/expense-graph.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports:[HeaderComponent, ExpenseDisplayComponent, ExpenseFormComponent, ExpenseGraphComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';
}
