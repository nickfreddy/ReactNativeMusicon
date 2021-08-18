import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import font from '../common/font'
import MyIcon from '../component/MyIcon'
import MyText from '../component/MyText'

const DrawerCustome = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../asset/image/image1.jpg')}
          style={styles.image}
        />
        <MyText style={styles.name}>Yayat Hidayat</MyText>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.optionContainer}>
            <MyIcon 
              source={require('../asset/icon/edit.png')}
              size={42}
            />
            <MyText style={styles.optionText}>Edit Profile</MyText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.optionContainer}>
            <MyIcon 
              source={require('../asset/icon/settings.png')}
              size={42}
            />
            <MyText style={styles.optionText}>Account</MyText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.optionContainer}>
            <MyIcon 
              source={require('../asset/icon/logout.png')}
              size={42}
            />
            <MyText style={styles.optionText}>Log out</MyText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.closeContainer}>
        <TouchableOpacity>
          <MyIcon 
            source={require('../asset/icon/close.png')}
            size={42}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerCustome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 135,
    alignItems: 'center',
    marginBottom: 52,
  },
  name: {
    fontFamily: font.bold,
    fontSize: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  closeContainer: {
    position: 'absolute',
    top: 38,
    right: 18
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 31,
    marginBottom: 36,
  },
  optionText: {
    fontFamily: font.nunitoMedium,
    fontSize: 16,
    marginLeft: 21,
  }
  
})
