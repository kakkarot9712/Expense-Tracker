import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { ExpenseModel } from "./expense.model";

@Injectable({providedIn: "root"})

export class ExpenseService {
    private expenses = []
    private months_list = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    
    constructor(){}

    expenseChanged = new BehaviorSubject<boolean>(true)
    currentYear = new BehaviorSubject<string>('2022')

    getFilteredExpenses(year: string){
        return this.expenses.filter((expense: ExpenseModel)=>expense.expenseDate.year === year)
    }

    getMonths(){
        return this.months_list.slice()
    }

    addExpense(newExpense: ExpenseModel){
        this.expenses.push(newExpense)
        this.expenseChanged.next(true)
        localStorage.setItem('expenses', JSON.stringify(this.expenses))
    }

    autoFetch(){
        if(JSON.parse(localStorage.getItem('expenses'))){
            this.expenses = JSON.parse(localStorage.getItem('expenses'))
        }
    }
}
