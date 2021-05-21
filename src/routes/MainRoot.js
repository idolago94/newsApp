import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';
import Loader from '../components/Loader';
import { Provider } from 'mobx-react';
import { AppStore } from '../stores'

const stores = { AppStore }

const MainRoot = () => {

    return (
        <SafeAreaView style={[GlobalStyles.flex1, s.safeArea]}>
            <Provider {...stores}>
                <Loader />
            </Provider>
        </SafeAreaView>
    )
}

export default MainRoot

const s = StyleSheet.create({
    safeArea: {
        backgroundColor: 'rgb(49,49,49)'
    }
})