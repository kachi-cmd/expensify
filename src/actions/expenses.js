import uuid from 'uuid';
import dataBase from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});
// for connecting firebase to redux --- CRUD -> create (1st stage of CRUD)
export const startAddExpense= (expenseData = {})=>{
  return (dispatch)=>{
    const{
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt}
  return  dataBase.ref('expenses').push(expense).then((ref)=>{
     dispatch(addExpense({
       id: ref.key,
       ...expense
     }));
   })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
