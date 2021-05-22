import 'react-native-gesture-handler';
import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, MyArticles } from '../../screens';
import { SCREENS } from '../../utils/enums'

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREENS.MAIN}
                    component={Main}
                    options={({ navigation, route }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate(SCREENS.MY_ARTICLES)}
                                title="Favorite"
                            />
                        ),
                    })}
                />
                <Stack.Screen name={SCREENS.MY_ARTICLES} component={MyArticles} options={{ headerTitle: 'My Articles' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator