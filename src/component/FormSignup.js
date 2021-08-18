import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import color from '../common/color'
import font from '../common/font'
import MyInput from './MyInput'
import MyText from './MyText'

const FormSignup = () => {

  const [fullname, setFullname] = useState('');
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [valid, setValid] = useState([false,false,false,false]);
  const [readOnly, setReadOnly] = useState(false);
  // // const user = useSelector(state => state.auth.user)
  
  // useEffect(() => {
  //   props.type === 'Sign In' && setValid([true,true,false,false]);
  //   props.type === 'SAVE' && setValid([true, true, true, false])
  //   if (props.type === 'LOGOUT' || props.type === 'SAVE'){
  //     setFullname(user.fullname);
  //     setUsername(user.username);
  //     setEmail(user.email);
  //   }
  //   props.type === 'LOGOUT' && setReadOnly(true);
  // }, [])

  // const isValid = () => {
  //   return !valid.includes(false);
  // }

  const updateValid = (index, value) => {
    let current = valid;
    current[index] = value;
    setValid(current);
  }

  // const buttonClicked = () => {
  //   if (props.type === 'LOGOUT') {
  //     props.submited()
  //   }else {
  //     let result = isValid();
  //     console.log(result);
  //     if (result) {
  //       if (props.type === 'Sign In') {
  //           props.submited({
  //             email, password
  //           })
  //       } else {
  //         props.submited({
  //           fullname, username, email, password
  //         })
  //       }
  //     }
  //   }
  // }


  return (
    <View>
      <MyText style={styles.formLabel}>Full Name</MyText>
      <MyInput
        placeholder='Input your full name'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        readOnly={readOnly}
      />
      <MyText style={styles.formLabel}>Username</MyText>
      <MyInput
        placeholder='Input your username'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        readOnly={readOnly}
      />
      <MyText style={styles.formLabel}>Email</MyText>
      <MyInput
        placeholder='Input your email'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        readOnly={readOnly}
      />
      <MyText style={styles.formLabel}>Password</MyText>
      <MyInput
        placeholder='Input your password'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        readOnly={readOnly}
        secure
      />
      <MyText style={styles.formLabel}>Confirm Password</MyText>
      <MyInput
        placeholder='Confirm your password'
        value={fullname}
        onChangeText={e => setFullname(e)}
        pattern={[
          ['(?!^$)','not empty'],
          ["^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",'unvalid name']
        ]}
        onValidation={(e)=> updateValid(0, e)}
        readOnly={readOnly}
        secure
      />

      <TouchableOpacity>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={color.buttonGradient} style={styles.buttonGradient}>
          <MyText style={styles.buttonText}>Sign Up</MyText>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default FormSignup

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
})
