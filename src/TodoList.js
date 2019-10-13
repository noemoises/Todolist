import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';


function TodoList({todos, addTodo}){
  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text }</li>)}
        <button onClick={() => addTodo('Novo Todo')}>Add Todo</button>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
