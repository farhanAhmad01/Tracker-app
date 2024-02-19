import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/authSlice";
import { addTodo } from "../slices/todoSlice";
import { pushErrorNotification } from "../utils/pushNotification";

const AddTodo = ({ open, setOpen }) => {

  const [todo,setTodo] = useState({
    title: "",
    description : ""
  })


  const dispatch = useDispatch()
  const {user} = useSelector(selectUser)


  const isTodoValid = (todo) => {
    return todo.title.trim() !== '' && todo.description.trim() !== '';
  };
  

  const handleChangeTodo = (e) => {
    const {name, value} = e.target
    setTodo({
      ...todo,
      [name] : value
    })
  }

  const handleSubmit = () => {
    if(isTodoValid(todo)){
      dispatch(addTodo({...todo, createdAt : new Date(), completed : false, userId: user.userId }))
      setTodo({
        title: "",
        description: ""
      })
      setOpen(false);
      return;
    }
    
   pushErrorNotification("Fill Todos Field !")
  };

  return (
    <div className="Form">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "#111",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "orange", fontWeight: "bolder", fontSize: "3rem" }}
          >
            Add Todo
          </Typography>

          <TextField
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input"
            name="title"
            onChange={handleChangeTodo}
          />

          <TextField
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input"
            name="description"
            onChange={handleChangeTodo}

          />

          <Button
            variant="outlined"
            onClick={handleSubmit}
            style={{
              padding: ".6rem",
              backgroundColor: "orange",
              color: "white",
              fontSize: "1.3rem",
              marginTop: "2rem",
            }}
          >
            Add Todo
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTodo;
