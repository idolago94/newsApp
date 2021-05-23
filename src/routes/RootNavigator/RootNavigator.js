import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, MyArticles } from '../../screens';
import { SCREENS } from '../../utils/enums'
import { Icon } from 'react-native-eva-icons';
import LRC from '../../components/LRC'

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREENS.MAIN}
                    component={Main}
                    options={({ navigation, route }) => ({
                        headerRight: () => <Icon name='star' width={24} height={24} fill='black' onPress={() => navigation.navigate(SCREENS.MY_ARTICLES)}/>,
                    })}
                />
                <Stack.Screen name={SCREENS.MY_ARTICLES} component={(props) => <LRC {...props} component={MyArticles} />} options={{ headerTitle: 'My Articles' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator