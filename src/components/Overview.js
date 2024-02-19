import { Box, Tab, Tabs, TextField } from "@material-ui/core";
import * as React from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { searchTodo, todosSelector } from "../slices/todoSlice";
import { completedTodos, pendingTodos, recentTodos } from "../utils/todosGraph";

export default function LabTabs() {
  const [value, setValue] = React.useState(0);

  const { todos, searchKey } = useSelector(todosSelector);
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="overview">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="View All" style={{ width: "40rem" }} />
            <Tab label="Pending" style={{ width: "40rem" }} />
            <Tab label="Completed" style={{ width: "40rem" }} />
            <Tab label="Recent" style={{ width: "40rem" }} />
          </Tabs>
        </Box>
      </div>

      <div className="searchbox">
        <TextField
          id="standard-basic"
          className="input"
          label="Search Todo ..."
          variant="standard"
          style={{ width: "60rem" }}
          value={searchKey}
          onChange={e => dispatch(searchTodo(e.target.value))}
      
        />{" "}
      </div>

      <div>
        <TabPanel value={value} index={0}>
          <Todos todos={todos} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Todos todos={pendingTodos(todos)} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Todos todos={completedTodos(todos)} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Todos todos={recentTodos(todos)} />
        </TabPanel>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
