import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import { Button } from "@material-ui/core";
import { AddLocation } from "@mui/icons-material";
import AddTodo from "../components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { reterieveAllTodos } from "../slices/todoSlice";
import { selectUser } from "../slices/authSlice";

export default function Dashboard({ handleLogout }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector(selectUser);

  useEffect(() => {
    dispatch(reterieveAllTodos(user.userId));
  }, [dispatch, user.userId]);

  return (
    <div className="dashboard">
      <AddTodo open={open} setOpen={setOpen} />

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Navbar handleLogout={handleLogout} />
          </Grid>
          <Grid item xs={12}>
            <Overview />
          </Grid>
        </Grid>
      </Box>
      <div className="addBtn" onClick={() => setOpen(true)}>
        <Button variant="contained">
          <AddLocation style={{ color: "green", fontSize: "3rem" }} />
        </Button>
      </div>
    </div>
  );
}
