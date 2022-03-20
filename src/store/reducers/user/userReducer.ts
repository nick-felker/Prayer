import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../../../types/type";



const initialState:userType ={
    userName: '',
}

interface addUserNameType{
    userName: string;
}


const userReducer = createSlice({
    name: 'User',
    initialState,
    reducers:{
        addUserName: (state, {payload}: PayloadAction<addUserNameType>) => {
            return {...state, ...payload}
        }
    }

})

export const {addUserName} = userReducer.actions;
export default userReducer.reducer;