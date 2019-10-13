import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store = {store}>
      <h1>Hello world</h1>
      <TodoList/>
    </Provider>
  );
}

export default App;
