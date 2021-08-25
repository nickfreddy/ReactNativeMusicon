import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from '../common/color'
import MyIcon from './MyIcon'
import MyText from './MyText'

const ImagePicker = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity>
        <View style={
          props.circle 
            ? styles.circle
            : styles.square
        }>
        </View>
        <View style={styles.addContainer}>
          <View style={styles.add}>
            <MyIcon
              source={require('../asset/icon/addPhoto.png')}
              size={28}
              style={styles.icon}
            />
            <MyText>Add Photo</MyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  circle: {
    width: 130,
    height: 130,
    borderRadius: 130,
    backgroundColor: color.gray3
  },
  square: {
    width: 130,
    height: 130,
    borderRadius: 8,
    backgroundColor: color.gray3
  },
  container: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  addContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 8,
  }
})
