import React from 'react'
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import color from '../common/color';
import dimension from '../common/dimension';
import font from '../common/font';
import FormSignup from '../component/FormSignup';
import MyText from '../component/MyText'
import Oauth from '../component/Oauth';


const Signup = (props) => {


  return (
    <View style={styles.container}>
        <StatusBar
          translucent
          animated
          backgroundColor="#00000000"
          barStyle='light-content'
          showHideTransition='slide'
        />
        <ImageBackground
          source={require('../asset/image/loginBackground.png')}
          resizeMode="cover"
          style={styles.ImageBackground}
        >
          <ScrollView>
            <View style={styles.content}>
              <Image
                source={require('../asset/icon/logo.png')}
                width={188}
                height={50}
                style={styles.logo}
              />
              <View style={styles.formContainer}>
                <View style={styles.formHeader}>
                  <MyText style={styles.formHeaderText} >Sign Up</MyText>
                </View>
                <View style={styles.formBody}>
                  <FormSignup />
                  <View style={styles.otherOption}>
                    <MyText>Already have an account? </MyText>
                    <TouchableOpacity
                      onPress={()=> props.navigation.navigate('Login')}
                    >
                      <MyText style={styles.bold}>Login Here</MyText>
                    </TouchableOpacity>
                  </View>
                  <Oauth />
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    minHeight: dimension.fullHeight,
    flex: 1,
    backgroundColor: '#1F1D2Bc0',
    alignItems: 'center',
  },
  logo: {
    width: 188,
    height: 50,
    marginTop: 86,
  },
  formContainer: {
    width: '80%',
    marginVertical: 37,
    elevation: 5,
  },
  formHeader: {
    paddingVertical: 16,
    paddingHorizontal: 20, 
    backgroundColor: color.black,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  formHeaderText: {
    fontFamily: font.bold,
    fontSize: 16,
  },
  formBody: {
    paddingBottom: 25,
    paddingHorizontal: 20, 
    backgroundColor: color.black2,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  otherOption: {
    alignSelf: 'center',
    marginVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bold: {
    fontFamily: font.bold,
    textDecorationLine: 'underline'
  }
  
})
