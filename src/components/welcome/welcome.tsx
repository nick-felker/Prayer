import React, { useState } from 'react';
import { RootState } from '../../store/store';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Task from '../task/task';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { taskSelector } from '../../store/reducers/task';
import { TaskType } from '../../../types/type';
import { useAppDispatch } from '../../../hooks/useAppDispatch';


const plusIcon = ('../../images/Plus.png');

interface WelcomePageProps{
    navigation: any;
}

const WelcomePage = (props:WelcomePageProps) =>{

    const dispatch = useAppDispatch();
    const tasks = useAppSelector(taskSelector);
    return(
        <>
        <View style={WelcomeStyles.HeaderBlock}>
            <Text style={WelcomeStyles.title}>My Desk</Text>
            <View style={WelcomeStyles.underTitleLine}/>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Add task')}} style={WelcomeStyles.tinyLogo} >
                <Image
                    source={require(plusIcon)}
                />
             </TouchableOpacity>
        </View>
            
            <View style={WelcomeStyles.tasksContainer}>
                {tasks.map((task:TaskType)=>{return (
                    <TouchableOpacity onPress={()=>{}} style={WelcomeStyles.outerBox}>
                        <Text key={task.id} style={WelcomeStyles.taskText}>{task.name}</Text>
                    </TouchableOpacity>
                    
                
                )})}
                
            </View>
        </>
    )
}

const WelcomeStyles = StyleSheet.create({
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
    },
    outerBox:{
        borderColor: '#E5E5E5',
        borderRadius: 5,
        position: 'relative',
        borderWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        width: '90%',
        borderStyle: 'solid',
        marginBottom: 10,
    },
    taskText:{
        fontSize: 20,
        color: 'black'
    }
})

export default WelcomePage;