import React from 'react';
import { useCollection } from './useFirebase';

export function List() {
  const [expenses, isLoading, error] = useCollection('expenses');

  if (isLoading) {
    return '...Loading...';
  }

  if (error) {
    return `Error. ${error.message}`;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Expenses</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.id}</td>
            <td>{expense.description}</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
