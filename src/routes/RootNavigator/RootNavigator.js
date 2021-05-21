import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../../screens';

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator