export class ExpenseModel{
    constructor(
        public expenseName: string,
        public expenseAmount: string,
        public expenseDate: {
            day: string,
            month: string,
            year: string
        }
    ){}
}
