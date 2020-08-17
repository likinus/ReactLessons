import React from 'react';
import Form from  './components/form/Form';
import List from './components/List/List';
import Context from './components/Context';

function App() {
  const[listFields, setListFields] = React.useState([
    { id: 1, money: '10 BYN', description: 'Example' }
  ])

function removeList(id) {
  setListFields(listFields.filter(listField => listField.id !== id))
}

function addLists(money, description) {
  setListFields(listFields.concat([{
    money,
    description,
    id: Date.now()
  }]))

}

  return (
    <Context.Provider value={{ removeList }}>
      <React.Fragment>
        <Form onCreate={addLists} />
        <List listFields={ listFields }/>
      </React.Fragment>
    </Context.Provider>
  );
}

export default App;
