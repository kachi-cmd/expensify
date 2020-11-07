import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expense_Total'

// create a counter for expense 
// use the logic of expense total,format final figure with numeraljs
// render both to the screen ... viewing *** expenses totaling ***

const ExpenseSummary = ({expensesCount, expensesTotal})=>{
  
  const expenseWord = expensesCount ===1 ? 'expense' : 'expenses'
  const format = numeral(expensesTotal / 100).format('$0,0.00')

    return(
    <div>
     { 
expensesCount >0 && <h1> Viewing { expensesCount } {expenseWord} totaling {format} 
        </h1> 
     }
    </div>
)};

const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters)
    return {
      expensesCount: visibleExpense.length,
      expensesTotal : selectExpensesTotal(visibleExpense)
    };
  };
  
  export default connect(mapStateToProps)(ExpenseSummary);