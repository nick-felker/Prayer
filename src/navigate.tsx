import React from "react";
import Task from "./components/task/task";
import WelcomePage from "./components/welcome/welcome";
import Registration from "./components/registration/registration";
import addTaskModal from "./components/modalWindows/addTask/addTask";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function Navigate(){
    return(
       <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Registration'
                    component={Registration}
                />
                <Stack.Screen
                    name='My desk'
                    component={WelcomePage}
                />
                <Stack.Screen
                    name='Task'
                    component={Task}
                />
                <Stack.Screen
                    name='Add task'
                    component={addTaskModal}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
       </>
    )
       
}