import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { ExpenseService } from './shared/expense.service';

@Component({
  standalone: true,
  imports:[HeaderComponent, RouterModule, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'expense-tracker';
  constructor(private expenseService: ExpenseService){}

  ngOnInit(): void {
    this.expenseService.autoFetch()
  }
}
