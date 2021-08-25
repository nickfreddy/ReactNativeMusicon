import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import color from '../common/color'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'
import MyButton from './MyButton'

const Hero = (props) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={color.buttonGradient} 
      style={styles.heroContainer}
    >
      <MyText style={styles.welcomeTxt}>Welcome to Musicon!</MyText>
      <MyText style={styles.heroDescription}>Musicon provides you with various music, we have million music from all over the world. Now it’s your time to feel the joy from Musicon, create your own playlist now!</MyText>
      <MyButton title='Create Playlist' plus big action={()=>props.action()} />
    </LinearGradient>
  )
}

export default Hero

const styles = StyleSheet.create({
  heroContainer: {
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  welcomeTxt: {
    fontFamily: font.bold,
    fontSize: 20,
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  
})
