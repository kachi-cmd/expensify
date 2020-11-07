// import moment from 'moment'

const total = getExpenseTotal(
    expense.map((expense) => { expense.amount}
    ).reduce((accumulator, currentValue) =>accumulator + currentValue, 0 )
    );

export default total;