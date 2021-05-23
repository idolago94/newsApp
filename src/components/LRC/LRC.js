import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { observer } from 'mobx-react';
import { AppStore } from '../../stores';

const LRC = (observer(({ component }) => {
  useEffect(() => {
    handleUserData()
  }, [])

  const handleUserData = () => {
    AccessToken.getCurrentAccessToken()
      .then(data => {
        AppStore.setUser(data.userID)
      })
      .catch(err => console.log('err', err))
  }

  const Comp = component
  return (
    <View style={s.container}>
      {AppStore.getUser && <Comp />}
      <View style={s.loginButtonContainer}>
        {Platform.OS == 'android' && <LoginButton
          publishPermissions={['publish_actions']}
          readPermissions={['public_profile']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                handleUserData()
              }
            }
          }
          onLogoutFinished={() => AppStore.setUser(null)} />}
          {!AppStore.getUser && <Text style={s.guestContinue} onPress={() => AppStore.setUser('guest')}>continue as guest</Text>}
      </View>
    </View>
  )
}))

export default LRC

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  guestContinue: {
    color: 'royalblue',
    padding: 5
  }
})