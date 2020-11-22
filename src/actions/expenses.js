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
// for connecting firebase to redux --- CRUD -> deleting (4th stage of CRUD)
export const startRemoveExpense =({ id } = {})=>{
  return (dispatch)=>{
   return dataBase.ref(`expenses/${id}`).remove().then(()=>{
        dispatch(removeExpense({id}))
    })
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
// for connecting firebase to redux --- CRUD -> updating/edit (3rd stage of CRUD)
export const startEditExpense = (id, updates)=>{
  return (dispatch)=>{
    return dataBase.ref(`expenses/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates))
    })
  }
}

//SET_EXPENSES
export const setExpenses = (expense) => ({
  type: 'SET_EXPENSES',
  expense
})
// for connecting firebase to redux --- CRUD -> reading (2nd stage of CRUD)
export const startSetExpenses= ()=>{
  return (dispatch)=>{
  return  dataBase.ref('expenses').once('value').then((snapshot)=>{
       const expense = [];

       snapshot.forEach((childSnapshot)=>{
        expense.push({
            id: childSnapshot.key,
          ...childSnapshot.val()
       })
       })

     dispatch(setExpenses(expense));
   })
  }
}