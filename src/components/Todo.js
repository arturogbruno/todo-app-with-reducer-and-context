import React, { useContext } from "react";
import useToggleState from "../hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "../contexts/todos.context";

function Todo({ id, task, completed }) {
    const [isEditing, toggle] = useToggleState(false);
    const dispatch = useContext(DispatchContext);

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => dispatch({type: "TOGGLE", id: id})}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? "line-through" : "none",
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => dispatch({type: "REMOVE", id: id})}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Todo;
