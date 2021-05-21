import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loader = inject(({ AppStore }) => ({
    visible: AppStore.getIsLoader
}))(observer(({ visible }) => {
    if (!visible) return <View />
    return (
        <View style={s.container}>
            <ActivityIndicator size="large" color='white' />
        </View>
    )
}))

export default Loader

const s = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        justifyContent: 'center'
    }
})