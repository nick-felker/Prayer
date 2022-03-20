import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../../../../types/type";

interface Tasks{
    Tasks:TaskType[];
}

const initialState:Tasks = {
    Tasks: [
        {name: 'ToDo', id: Math.random().toString()},
        {name: 'Testing', id: Math.random().toString()},
        {name: 'Completed', id: Math.random().toString()},
        {name: 'In progress', id: Math.random().toString()},
        {name: 'Smth', id: Math.random().toString()},
    ]
}

interface AddTaskType{
    name: string;
}

const TaskReducer = createSlice({
    name: 'Task',
    initialState,
    reducers:{
        addTask: (state, {payload}: PayloadAction<AddTaskType>) => {
            const newTask = {
                name: payload.name,
                id: Math.random().toString(),
            }
            state.Tasks.push(newTask);
        }
    }

})

export const {addTask} = TaskReducer.actions;
export default TaskReducer.reducer;