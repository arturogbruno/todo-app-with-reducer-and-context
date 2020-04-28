import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Clean fishtank", completed: false},
        {id: 2, task: "Wash car", completed: true},
        {id: 3, task: "Grow beard", completed: false}
    ];

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    };

    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;