import React from 'react'
import { Image,SafeAreaView,StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <SafeAreaView style={styles.header}>

        <Image source={require('../assets/Logo.png')}
        resizeMode='contain'
        style={{height: 50}}
        />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
    }
})