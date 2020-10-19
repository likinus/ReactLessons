import React from 'react';
import { NavLink } from 'react-router-dom';

const Expenses = () => {
  const [value, setValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState(null);
  const [thirdValue, setThirdValue] = React.useState('');

  return (
    <>
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="expensesInput"
          type="text"
          placeholder="description"
        />
        <input secondValue={secondValue} className="expensesInput" type="text" placeholder="summ" />
        <input
          thirdValue={thirdValue}
          className="expensesInput"
          type="text"
          placeholder="category"
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Expenses;
