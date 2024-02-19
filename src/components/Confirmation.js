import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Container,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';

const Confirmation = ({confirmattionModalOpen ,setConformationModalOpen, id}) => {


  const dispatch = useDispatch()

  const handleDelete = () => {
    // Implement your delete logic here
    dispatch(deleteTodo(id))
    // Close the modal after deletion
    setConformationModalOpen(false)
  };

  return (
    <Container

    >


      <Dialog open={confirmattionModalOpen} onClose={() => setConformationModalOpen(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this todo?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConformationModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Confirmation;
