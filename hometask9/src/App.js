import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Expenses from './components/Expenses';
import ExpensesCategory from './components/ExpensesCategory';
import { List } from './components/List';

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/expenses">Expenses</NavLink>
      <NavLink to="/category">Expenses category</NavLink>
      <Switch>
        <Route path="/expenses">
          <Expenses />
          <List />
        </Route>
        <Route path="/category">
          <ExpensesCategory />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
