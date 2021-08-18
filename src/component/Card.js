import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import color from '../common/color';
import font from '../common/font';
import MyText from './MyText';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={props.item.item.photo}
        style={styles.image}
      />
      <MyText style={styles.title}>{props.item.item.name}</MyText>
      <MyText style={styles.author}>{props.item.item.author}</MyText>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  cardContainer: {
    width: 150,
    marginBottom: 20,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 17,
    marginTop: 8,
    paddingBottom: 4,
  },
  author: {
    color: color.gray,
    fontFamily: font.nunito
  }
})
