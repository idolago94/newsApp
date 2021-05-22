import React from 'react'
import { StyleSheet } from 'react-native';
import Loader from '../components/Loader';
import { Provider } from 'mobx-react';
import { AppStore } from '../stores'
import RootNavigator from './RootNavigator/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const stores = { AppStore }

const MainRoot = () => {

    return (
        <SafeAreaView style={s.safeArea}>
            <Provider {...stores}>
                <React.Fragment>
                    <>
                        <RootNavigator />
                        <Loader />
                    </>
                </React.Fragment>
            </Provider>
        </SafeAreaView>
    )
}

export default MainRoot

const s = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})