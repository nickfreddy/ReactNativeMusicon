import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import color from '../common/color'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'

const MusicCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          source={props.item.item.photo}
          style={styles.image}
        />
        <View style={styles.detail}>
          <MyText style={styles.name}>{props.item.item.name}</MyText>
          <MyText style={styles.author}>{props.item.item.author}</MyText>
        </View>
      </View>
      <View>
        <MyIcon
          source={require('../asset/icon/tripleDot.png')}
          size={17}
        />
      </View>
    </View>
  )
}

export default MusicCard

const styles = StyleSheet.create({
  image: {
    width: 38,
    height: 38,
    borderRadius: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 19,
  },
  card: {
    flexDirection: 'row',
  },
  detail: {
    justifyContent: 'space-between',
    marginLeft: 14,
  },
  name: {
    fontFamily: font.bold,
    fontSize: 18,
  },
  author: {
    color: color.gray,
  }
})
