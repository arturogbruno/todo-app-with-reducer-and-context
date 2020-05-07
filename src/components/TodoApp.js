import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import useTodoState from '../hooks/useTodoState';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from '../contexts/todos.context';

function TodoApp() {
    const initialTodos = [];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
            }}
            elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: "64px" }}
            >
                <ToolBar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm addTodo={addTodo} />
                        <TodoList
                            todos={todos}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                            removeTodo={removeTodo}
                        />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
