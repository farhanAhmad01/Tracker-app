import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Confirmation from './Confirmation'
import EditTodo from './EditTodo'
import { dateAgoPeriod } from '../utils/date'
import { editTodoById } from '../slices/todoSlice'
import { useDispatch } from 'react-redux'


const Todo = ({title, description,completed,createdAt,id, userId}) => {
    const [confirmattionModalOpen , setConformationModalOpen] = useState(false)
    const [editModalOpen , setEditModalOpen] = useState(false)
    const [isCompleted, setIsCompleted] = useState(completed)

    const dispatch = useDispatch()

  const onTodoCompletion = () => {
    
    setIsCompleted(!isCompleted)
    dispatch(editTodoById({title,description, completed: !isCompleted, createdAt, id, userId}))
  }

    

  return (
    <div className='todo'>
    <Confirmation confirmattionModalOpen={confirmattionModalOpen} setConformationModalOpen={setConformationModalOpen} id={id} />
    <EditTodo editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} title={title}  description={description} completed={completed} createdAt={createdAt} id={id} userId={userId}  />

<h2 className='todoTitle'>
  {title && (
    <>
      <span className='firstCharacter'>{title[0]}</span>
      {title.substring(1)}
    </>
  )}
</h2>

        <p className='todoDescription'>{description}</p>
        <div className='actionsButton'>
        <Button variant="outlined" style={{ padding: ".2rem" , color: "white" , fontSize: "1.3rem"}} onClick={() => setEditModalOpen(true)}>Edit</Button>

        <Button
          variant="contained"
          style={{backgroundColor: "rgb(238, 60, 60)" , padding: ".2rem" , color: "white" , fontSize: "1.3rem"}}
          onClick={() => setConformationModalOpen(true)}
        >Delete</Button>


        
        </div>
        {completed && <div className="badge"></div>}
        <div className='todoInfo'>

 
        <Button variant="outlined" style={{ padding: ".2rem" , backgroundColor: completed ? "green" : "" , color: "white" , fontSize: "1.3rem"}} onClick={onTodoCompletion}>Proceed</Button>


        <p className='ago'>{dateAgoPeriod(createdAt)}</p>

        </div>
    </div>
  )
}

export default Todo