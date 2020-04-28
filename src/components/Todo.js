import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Todo({ id, task, completed, toggleTodo, removeTodo }) {
    return (
        <ListItem>
            <Checkbox
                tabIndex={-1}
                checked={completed}
                onClick={() => toggleTodo(id)}
            />
            <ListItemText
                style={{ textDecoration: completed ? "line-through" : "none" }}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;
