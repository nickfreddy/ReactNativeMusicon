import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import color from '../common/color'
import font from '../common/font'
import MyInput from './MyInput'
import MyText from './MyText'

const Form = (props) => {

  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState([false,false]);
  
  const isValid = () => {
    return !valid.includes(false);
  }

  const updateValid = (index, value) => {
    let current = valid;
    current[index] = value;
    setValid(current);
  }

  const buttonClicked = () => {
    props.submited()

    // let result = isValid();
    // console.log(result);
    // if (result) {
    //   props.submited({
    //     fullname, password
    //   })
    // }
  }


  return (
    <View>
      <MyText style={styles.formLabel}>Email or Username</MyText>
      <MyInput
        placeholder='Input your email or username'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
      />
      <MyText style={styles.formLabel}>Password</MyText>
      <MyInput
        placeholder='Input your password'
        value={password}
        onChangeText={e => setPassword(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        secure
      />

      <TouchableOpacity>
        <MyText style={styles.forgot}>Forgot Password?</MyText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> buttonClicked()}
      >
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={color.buttonGradient} style={styles.buttonGradient}>
          <MyText style={styles.buttonText}>Login</MyText>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  formLabel: {
    fontFamily: font.bold,
    fontSize: 14,
    marginBottom: 12,
    marginTop: 16,
  },
  buttonGradient: {
    height: 41,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    fontFamily: font.bold,
    fontSize: 14,
  },
  forgot: {
    marginTop: 12,
  }
})
