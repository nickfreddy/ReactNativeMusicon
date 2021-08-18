import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../common/color'
import font from '../common/font'

const MyText = (props) => {
  return (
    <Text style={[styles.text,{...props.style}]}>
      {props.children}
    </Text>
  )
}

export default MyText

const styles = StyleSheet.create({
  text: {
    fontFamily: font.regular,
    color: color.white,
    fontSize: 12,
  }
})
