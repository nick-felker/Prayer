import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View , ScrollView} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {addUserName} from '../../store/reducers/user'


interface RegistrationProps{
    navigation: any;
}

const Registration = (props:RegistrationProps) =>{
    
    const RegistrationImage = ('../../images/RegistrationImage.png');
    const [userNameValue, setUserNameValue] = useState('');
    const dispatch = useAppDispatch();

    function takeUserNameFromInput(text:string){
        setUserNameValue(text);
    }
    
    function addUserNameFunction(){
        if(!userNameValue?.trim()) return; 
        dispatch(addUserName({userName: userNameValue}))
        props.navigation.navigate('My desk');
    }
    
    
    return(
        <>
            
            <SafeAreaView style={styles.outerContainer}>
                    <TextInput placeholder="put here your name" onChangeText={takeUserNameFromInput} style={styles.userNameInput}></TextInput>
                    <Button title="Submit" onPress={addUserNameFunction}></Button>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    buttonTouchableContainer:{
        backgroundColor: 'red'
    },
    buttonOuterContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    submitButton:{
        backgroundColor: 'red',
        textAlign: 'center',
        position: 'relative',
        
    },
    outerContainer:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,

        justifyContent: 'center',
        alignContent: 'center',
    },
    userNameInput:{
        position: 'relative',
        textAlign: 'center',
        fontSize: 20,
    },
    
})

export default Registration;