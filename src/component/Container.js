import React from 'react'
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import color from '../common/color';

const height = Dimensions.get('screen').height;
const statusBarHeight = StatusBar.currentHeight;

const Container = (props) => {
  return (
    <View style={[styles.container,{...props.style}]}>
      {props.children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height + statusBarHeight,
    backgroundColor: color.black2,
  }
})
