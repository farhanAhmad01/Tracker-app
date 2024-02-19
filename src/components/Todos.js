import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { todosSelector } from '../slices/todoSlice'
import { filterTodos } from '../utils/todosGraph'


const Todos = ({todos}) => {

  const {searchKey} = useSelector(todosSelector)
  
  return (
    <div className='todosContainer'>
    <div className='todos'>
        {todos && todos.map(todo => filterTodos(todo, searchKey) && <Todo key={todo.id} {...todo} />)}
    </div>
    </div>
  )
}

export default Todos