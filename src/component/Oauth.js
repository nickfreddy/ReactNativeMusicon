import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import color from '../common/color'
import font from '../common/font'
import MyIcon from './MyIcon'
import MyText from './MyText'

const Oauth = () => {
  return (
    <View>
      <View style={[styles.container,styles.option]}>
        <View style={styles.line} />
        <MyText style={styles.or}>OR</MyText>
        <View style={styles.line} />
      </View>
      <View style={[styles.container, styles.oauthBtn]}>
        <MyIcon 
          source={require('../asset/icon/google.png')}
          size={14}
          style={styles.icon}
        />
        <MyText style={styles.loginBtnText}>Login with Google</MyText>
      </View>
      <View style={[styles.container, styles.oauthBtn]}>
        <MyIcon 
          source={require('../asset/icon/facebook.png')}
          size={14}
          style={styles.icon}
        />
        <MyText style={styles.loginBtnText}>Login with Facebook</MyText>
      </View>
    </View>
  )
}

export default Oauth

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  option: {
    marginBottom: 20,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: color.gray3,
    position: 'relative',
    bottom: 7,
  },
  or: {
    paddingHorizontal: 15,
    fontFamily: font.bold,
    fontSize: 14,
  },
  oauthBtn: {
    borderWidth: 1,
    borderColor: color.gray3,
    height: 41,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 8
  },
  loginBtnText: {
    fontFamily: font.bold,
    fontSize: 14,
  }
})
