import { firestore, docToObject } from '../components/Firebase/firebase';

const ADD_TODOS = 'ADD_TODO';
const DROP_FORM = 'DROP_FORM';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const LOADING = 'LOADING';

let initialState = {
  todos: [],
  loading: false,
  error: null,
  isAddTask: false,
  newText: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TEXT:
      return {
        ...state,
        newText: action.text,
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.todos],
      };
    case DROP_FORM: {
      return { ...state, isAddTask: true };
    }
    case LOADING: {
      return { ...state, loading: action.loading };
    }

    default:
      return state;
  }
};

export const addTodo = (todos) => ({ type: ADD_TODOS, todos });
export const dropForm = (isAddTask) => ({ type: DROP_FORM, isAddTask });
export const updateNewText = (text) => ({ type: UPDATE_NEW_TEXT, text });
export const loading = (loading) => ({ type: LOADING, loading });
export const getDescription = () => {
  return (dispatch) => {
    dispatch(loading(true));
    firestore
      .collection('/todos')
      .get()
      .then((snapshot) => snapshot.docs.map(docToObject))
      .then((data) => {
        dispatch(loading(false));
        dispatch(addTodo(data));
      });
  };
};

export default todoReducer;
