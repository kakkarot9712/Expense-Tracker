import { Action } from '@ngrx/store'
import { ExpenseModel } from "../shared/expense.model"

export const GET_EXPENSES = 'GET_EXPENSES'

export class GetExpenseAction implements Action {
    type = GET_EXPENSES
    payload: ExpenseModel[]
}

export type ExpenseActions = GetExpenseAction