import React, { useRef, useState } from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, TextInput, Button} from 'react-native';
import Task from '../task/task';


const plusIcon = ('../../images/Plus.png');
const WelcomePage = () =>{

    interface Task{
        name: string;
        id: string;
    }


    const [taskData, setTaskData] = useState<Task[]>([
        {name: 'ToDo', id: Math.random().toString()},
        {name: 'Testing', id: Math.random().toString()},
        {name: 'Completed', id: Math.random().toString()},
        {name: 'In progress', id: Math.random().toString()},
        {name: 'Smth', id: Math.random().toString()}
    ])
    const [addTaskFlag, setAddTaskFlag] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    
    function changeStateTask(text:string){
        setNewTaskName(text);
    }
    function addTask(){
        const newTask = {name: newTaskName, id: Math.random().toString()};
        taskData.push(newTask);
        setTaskData(taskData);
        setNewTaskName('')
        setAddTaskFlag(false);
    }


    return(
        <>
       
        <View style={WelcomeStyles.HeaderBlock}>
            <Text style={WelcomeStyles.title}>My Desk</Text>
            <View style={WelcomeStyles.underTitleLine}/>
            <TouchableOpacity onPress={()=>{setAddTaskFlag(true)}} style={WelcomeStyles.tinyLogo} >
                <Image
                    source={require(plusIcon)}
                />
             </TouchableOpacity>
        </View>
            
            <View style={WelcomeStyles.tasksContainer}>
                {taskData.map((task:Task)=>{return <Task key={task.id} id={task.id} name={task.name}></Task>})}
            </View>
            <Modal visible={addTaskFlag}>
               <View style={AddTaskModal.outerModalContainer}>
                    <Text style={AddTaskModal.title}>ADD A NEW TASK</Text>
                    <TextInput style={AddTaskModal.addTaskInput} placeholder='put here your`s task name' onChangeText={changeStateTask}></TextInput>
                    <Button title='Submit' onPress={addTask}></Button>
               </View>

            </Modal>
        </>
    )
}

const WelcomeStyles = StyleSheet.create({
    bebra:{
        padding: 10,
        backgroundColor: 'red',
    },
    tinyLogo:{
        width: 20,
        height: 20,
        position: 'absolute',
        right: 20,
        padding: 5,
        top: 5,
    },
    HeaderBlock:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    title:{
        color: 'black',
        fontSize: 20,
    },
    underTitleLine: {
        height: 2,
        position: 'relative',
        width: '90%',
        marginTop: 25,
        backgroundColor: '#b5bfc9'
    },
    tasksContainer:{
        display: 'flex',
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

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

export default WelcomePage;