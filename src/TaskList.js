import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './tasksSlice';

function TaskList() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask({ id: Date.now(), text: 'New Task' }));
    };

    const handleRemoveTask = taskId => {
        dispatch(removeTask(taskId));
    };

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskList;
