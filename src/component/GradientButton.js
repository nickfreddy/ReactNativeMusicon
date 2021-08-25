import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import color from '../common/color'
import font from '../common/font'
import MyText from './MyText'

const GradientButton = (props) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={props.active 
        ? color.buttonGradient
        : props.cancel 
          ? [color.gray,color.gray]
          : props.warning 
            ? color.warningGradient
            : [color.black,color.black]
      } 
      style={[styles.btnContainer, props.round && styles.round, props.style]}
    >
      <TouchableOpacity style={styles.btn} 
        onPress={()=>{
          props.action && props.action()
        }}
      >
        <MyText 
          style={!props.small && styles.text}
        >{props.title}</MyText>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default GradientButton

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flex: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
  },
  round: {
    borderRadius: 20,
  },
  text: {
    fontFamily: font.bold,
    fontSize: 16,
  }
})
