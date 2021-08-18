import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'

const Header = (props) => {
  return (
    <View style={[styles.header, props.style]}>
      <MyIcon 
        source={require('../asset/icon/hamburger.png')}
        size={24}
        style={styles.hamburger}
      />
      <MyText style={styles.title}>{props.title}</MyText>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  hamburger: {
    position: 'absolute',
    bottom: 6, 
    left: 20, 
  },
  title: {
    fontFamily: font.bold,
    fontSize: 16,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 66,
    paddingBottom: 8
  }
})
