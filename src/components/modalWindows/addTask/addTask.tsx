import { View, Text, StyleSheet, Button } from "react-native"
import React from "react"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { addTask } from "../../../store/reducers/task"

interface addTaskModalProps{
    navigation: any;
}

const addTaskModal = (props:addTaskModalProps) =>{

    const dispatch = useAppDispatch();
    const [newTaskName, setNewTaskName] = useState('');
    
    function changeStateTask(text:string){
        setNewTaskName(text);
    }
    function addTaskFunction(){
        if(!newTaskName?.trim()) return;
        dispatch(addTask({name:newTaskName}));
        props.navigation.navigate('My desk');
    }

    return(
        <View style={AddTaskModal.outerModalContainer}>
            <Text style={AddTaskModal.title}>ADD A NEW TASK</Text>
            <TextInput style={AddTaskModal.addTaskInput} placeholder='put here your`s task name' onChangeText={changeStateTask}></TextInput>
            <Button title='Submit' onPress={addTaskFunction}></Button>
        </View>
    )
}


const AddTaskModal = StyleSheet.create({
    outerModalContainer:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: 100,
        color: 'black'
    },
    addTaskInput:{
        position: 'relative',
        textAlign: 'center',
        
    }
})

export default addTaskModal;