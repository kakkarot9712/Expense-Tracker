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
    editExpenseIndex = new Subject<number>()

    getFilteredExpenses(year: string){
        return this.expenses.filter((expense: ExpenseModel)=>expense.expenseDate.year === year)
    }

    getExpense(index: number){
        return this.expenses[index]
    }

    getMonths(){
        return this.months_list.slice()
    }

    applyChanges(){
        this.expenseChanged.next(true)
        localStorage.setItem('expenses', JSON.stringify(this.expenses))
    }

    addExpense(newExpense: ExpenseModel){
        this.expenses.push(newExpense)
        this.applyChanges()
    }

    editExpense(index: number){
        this.editExpenseIndex.next(index)
    }

    replaceExpense(index: number, newExpense: ExpenseModel){
        this.expenses[index] = newExpense
        this.applyChanges()
    }

    deleteExpense(index: number){
        this.expenses.splice(index, 1)
        this.applyChanges()
    }

    autoFetch(){
        if(JSON.parse(localStorage.getItem('expenses'))){
            this.expenses = JSON.parse(localStorage.getItem('expenses'))
        }
    }
}
