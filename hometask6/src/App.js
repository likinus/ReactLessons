import React from 'react';
import './App.css';

function withLocalStorage(Component, storageKey, initialValue) {
  return class withLocalStorage extends React.Component {
    constructor(props) {
      super(props);
      const value = localStorage.getItem(storageKey);

      this.state = {
        value: value !== null ? value : initialValue,
      };
    }

    onChange = (e) => {
      this.setState({value: e.target.value});
      localStorage.setItem(storageKey, e.target.value);
    };

    render() {
      return <Component 
        value={this.state.value} 
        onChange={this.onChange}
        {...this.props} 
      />
    }
  }
}

const Input = ({onChange, value}) => 
  <input 
    type="text" 
    value={value} 
    onChange={(e) => onChange(e)}>
  </input>

const InputWithLocalStorage = withLocalStorage(Input);

function App() {
  return (
   <InputWithLocalStorage />
  );
}

export default App;
