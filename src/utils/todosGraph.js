

export const pendingTodos = (todos) => {

    return todos.filter(todo => !todo.completed)

}


export const completedTodos = (todos) => {
    return todos.filter(todo => todo.completed)

}

export const recentTodos = (todos) => {
    const last8Todos = todos.slice(-8);
    return last8Todos;
  };


export const filterTodos = (todo,searchKey) => {
    if(todo.title.includes(searchKey) || todo.description.includes(searchKey)) return true
    return false
    
}