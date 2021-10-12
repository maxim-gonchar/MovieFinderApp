import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from "./Main/Main"
import { MovieScreen } from "./Main/MovieScreen"
import { Choose } from './Screen/Choose';

export const Stack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Choose" component={Choose}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="MovieScreen" component={MovieScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

