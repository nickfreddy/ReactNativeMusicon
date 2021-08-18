import React from 'react'
import { StyleSheet, View } from 'react-native'
import color from '../common/color'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'

const TabIcon = props => {
    
  let path
  
  switch (props.name) {
    case 'Home':
      path = require('../asset/icon/home.png')
      break;
    case 'Search':
      path = require('../asset/icon/search.png')
      break;
    default:
      path = require('../asset/icon/playlist.png')
      break;
  }
  return (
    <View style={styles.iconContainer}>
      <MyIcon 
        source={path}
        size={22}
        color={!props.focus? color.gray : color.white}
      />
      <MyText style={props.focus ? styles.active : styles.inActive}>
        {props.name}
      </MyText>

    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
  iconContainer: {
    height: 34,
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  active: {
    fontFamily: font.medium
  },
  inActive: {
    color : color.gray, 
    fontFamily: font.medium
  }
})
