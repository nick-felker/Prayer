import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


interface Props{
    name: string;
    id: string;
    author: string;
}

const Task = (props:Props) =>{
    return(
        <>
           
           
        </>
    )
}


const styles = StyleSheet.create({
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
export default Task