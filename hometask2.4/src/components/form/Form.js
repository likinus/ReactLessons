import React, { useState } from 'react';
import Button from '../button/Button';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ onCreate }) {
  function submitHandler(event) {
    event.preventDefault();

    onCreate(value, secondValue);
  }

  const [value, setValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="firstInput"
        type="text"
        placeholder="Сколько денег?"></input>
      <input
        secondValue={secondValue}
        onChange={(event) => setSecondValue(event.target.value)}
        className="secondInput"
        type="text"
        placeholder="Описание"></input>
      <Button />
    </form>
  );
}

Form.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default Form;
