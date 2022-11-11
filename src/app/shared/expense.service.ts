import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { ExpenseModel } from "./expense.model";

@Injectable({providedIn: "root"})

export class ExpenseService {
    private DUMMY_EXPENSES = [
        {
            expenseName: 'Telivision',
            expenseAmount: '50000',
            expenseDate: {
                day: '08', 
                month: 'Nov', 
                year:'2022'
            }
        },
        {
            expenseName: 'Monthly Light Bill',
            expenseAmount: '3500',
            expenseDate: {
                day: '10', 
                month: 'Nov', 
                year:'2021'
            }
        },
        {
            expenseName: 'Washing Machine',
            expenseAmount: '20000',
            expenseDate: {
                day: '09', 
                month: 'Jul', 
                year:'2022'
            }
        },
        {
            expenseName: 'Monthly Rent',
            expenseAmount: '15000',
            expenseDate: {
                day: '15', 
                month: 'Dec', 
                year:'2020'
            }
        }]
    
    constructor(){}

    expenseChanged = new BehaviorSubject<boolean>(true)
    currentYear = new BehaviorSubject<string>('2022')

    getFilteredExpenses(year: string){
        return this.DUMMY_EXPENSES.filter((expense: ExpenseModel)=>expense.expenseDate.year === year)
    }

    addExpense(newExpense: ExpenseModel){
        this.DUMMY_EXPENSES.push(newExpense)
        this.expenseChanged.next(true)
    }
}