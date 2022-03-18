import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { VideoCarousel } from './screens';

/**
* @Component RootNavigation.js
* @Use Navigation configuration
**/

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="VideoCarousel" component={VideoCarousel} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}