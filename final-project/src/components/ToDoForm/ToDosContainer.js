import React from 'react';
import { connect } from 'react-redux';
import ToDoForm from './ToDoForm';
import { dropForm, updateNewText, getDescription } from '../../Redux/ToDoReducer';
import Preloader from '../../Preloader/Preloader';

class ToDoGetFirebaseComponent extends React.Component {
  componentDidMount() {
    this.props.getDescription();
  }

  render() {
    return (
      <>
        {this.props.loading ? <Preloader /> : null}
        <ToDoForm
          todos={this.props.todos}
          isAddTask={this.props.isAddTask}
          newToDo={this.props.newToDo}
          dropForm={this.props.dropForm}
          updateNewText={this.props.updateNewText}
          addTodos={this.props.addTodos}
          loading={this.props.loading}
          getDescription={this.props.getDescription}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.todoPage.todos,
    isAddTask: state.todoPage.isAddTask,
    newToDo: state.todoPage.newText,
    loading: state.todoPage.loading,
  };
};

const ToDosContainer = connect(mapStateToProps, { getDescription, dropForm, updateNewText })(
  ToDoGetFirebaseComponent,
);
export default ToDosContainer;
