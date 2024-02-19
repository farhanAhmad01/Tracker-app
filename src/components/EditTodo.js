import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { editTodoById } from "../slices/todoSlice";

const EditTodo = ({ editModalOpen, setEditModalOpen , title, description, id , ...rest}) => {

  const [editTodo,setEditTodo] = useState({
    title : title,
    description : description
  })

  const dispatch = useDispatch()


  const isTodoValid = (editTodo) => {
    return editTodo.title.trim() !== '' && editTodo.description.trim() !== '';
  };

  const handleChangeEditTodo = (e) => {
    const {name, value} = e.target
    setEditTodo({
      ...editTodo,
      [name] : value
    })
  }


  const handleSubmit = () => {
    if(isTodoValid(editTodo)){

  
      dispatch(editTodoById({...editTodo , id, ...rest} ))
      
      setEditModalOpen(false);
      return
    }
  };



  return (
    <div className="Form">
      <Modal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
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
            Edit Todo
          </Typography>

          <TextField
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input"
            value={editTodo.title}
            name="title"
            onChange={handleChangeEditTodo}
          />

          <TextField
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input"
            value={editTodo.description}
            name="description"
            onChange={handleChangeEditTodo}
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
            Edit Todo
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTodo;
