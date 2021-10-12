import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './Stack';
import { Choose } from './Screen/Choose';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export const Tab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: "#15141F" },
                    tabBarActiveTintColor: '#FE8E70',
                    tabBarInactiveTintColor: '#3D3C45',
                }}>
                <Tab.Screen name="Home" component={Stack}
                    options={{
                        headerShown: false,
                        showLabel: false,
                        tabBarIcon: ({ color }) => (<Entypo name name="home" color={color} size={28} />)
                    }} />
                <Tab.Screen name="Movie Finder" component={Choose}
                    options={{
                        headerShown: false,
                        showLabel: false,
                        tabBarIcon: ({ color }) => (<FontAwesome name="play-circle" color={color} size={28} />)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
