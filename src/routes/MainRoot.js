import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

const MainRoot = () => {

    return (
        <SafeAreaView style={[GlobalStyles.flex1, s.safeArea]}>
            <View style={GlobalStyles.screen}>
                <Text style={s.appName}>News App</Text>
            </View>
        </SafeAreaView>
    )
}

export default MainRoot

const s = StyleSheet.create({
    safeArea: {
        backgroundColor: 'rgb(49,49,49)'
    }
})