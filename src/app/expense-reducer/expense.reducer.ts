import { Action, State } from '@ngrx/store'
import { ExpenseModel } from '../shared/expense.model';
import * as fromExpensesAction from './expense.action'

type expenseState = {
    expenses: ExpenseModel[],
    filterYear: string
}

const initialState = {
    expenses: [
        {
            expenseName: 'Telivision',
            expenseAmount: '50,000',
            expenseDate: '08/10/22'
        },
        {
            expenseName: 'Monthly Light Bill',
            expenseAmount: '3500',
            expenseDate: '10/10/21'
        },
        {
            expenseName: 'Washing Machine',
            expenseAmount: '20,000',
            expenseDate: '09/05/22'
        },
        {
            expenseName: 'Monthly Rent',
            expenseAmount: '15,000',
            expenseDate: '15/12/20'
        }],

    filterYear: '2022'
}

export function ExpenseReducer(state: expenseState, action: fromExpensesAction.GetExpenseAction){
    state = initialState
    switch(action.type){
        case fromExpensesAction.GET_EXPENSES:
            return [
                ...(state.expenses)                
            ]
        
        default:
            return {
                ...state
            }
    }
}