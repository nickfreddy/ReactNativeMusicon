import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from '../common/color'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.action && props.action()
      }}
    >
      <View style={[styles.heroBtn , props.big && styles.round]}>
        { props.plus &&
          <MyIcon 
            source={require('../asset/icon/add.png')}
            size={props.big ? 20 : 17}
            style={styles.add}
            color={props.big ? color.blue : color.black2} 
          />
        }
        <MyText 
          style={ props.big ? styles.heroTxtBig : styles.heroTxt}
        >{props.title}</MyText>
      </View>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  heroBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: color.white,
    borderRadius: 8,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    paddingHorizontal: 14,
    borderRadius: 4
  },
  add: {
    marginRight: 4
  },
  heroTxt: {
    color: color.black2,
    fontFamily: font.bold,
    fontSize: 14,
  },
  heroTxtBig: {
    color: color.blue,
    fontFamily: font.bold,
    fontSize: 16,
  },
})
