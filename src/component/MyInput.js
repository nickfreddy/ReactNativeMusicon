import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from "../common/font";
import color from '../common/color'
import MyText from "./MyText";

const MyInput = (props) => {
  const [secure, setSecure] = useState(false);
  const [validations, setValidations] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    !props.pattern && setValid(true);
    props.secure && setSecure(true);
  }, [])
 
  const handleValidation = (value) => {
    const { pattern } = props;
    if (!pattern) return true;

    const conditions = pattern.map(rule => new RegExp(rule[0], 'g'));
    return conditions.map(condition => condition.test(value));
  }

  const cekValid = (value) => {
    setValidations(value);

    if(value.includes(false)){
      // setBottomLineColor('#EC521E');
      return false;
    } else {
      // setBottomLineColor('#ffffff');
      return true;
    }
  }

  const onChange = (value) => {
    const isValid = handleValidation(value);
    let check = cekValid(isValid);

    props.onValidation(check);
    props.onChangeText(value);
  }

  return (
    <View>
      <TextInput
        placeholder={props.numberOfLines ? '' : props.placeholder}
        secureTextEntry={secure}
        value={props.value}
        placeholderTextColor= {color.gray}
        style={[
          styles.inputBox, 
          props.secure && styles.secure,
          props.numberOfLines && styles.numberOfLines, 
          props.style
        ]}
        onChangeText={value => onChange(value)}
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
        editable={!props.readOnly}
        multiline={props.numberOfLines ? true : false}
        numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
      />
      { focused &&
        <View style={styles.warningContainer}>
          {validations.map((val, i) => !val && <Text style={styles.warning} key={i}>{props.pattern[i][1]}</Text>)}
        </View>
      }
      { props.secure && 
        <View style={styles.eye}>
          <TouchableOpacity onPress={()=> setSecure(!secure)}>
            { secure ?
              <Ionicons name='eye-off-outline' size={20} color='gray'/>
              :
              <Ionicons name='eye-outline' size={20} color='gray'/>
            }
          </TouchableOpacity>
        </View>
      }
      {props.numberOfLines && props.value === '' &&
        <View style={styles.placeholderContainer}>
            <MyText style={styles.placeholder}>{props.placeholder}</MyText>
        </View>
      }
    </View>
  );
}

export default MyInput;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#f5f5f5',
    fontFamily: font.regular,
    backgroundColor: color.secondary3,
    fontSize: 12,
  },
  numberOfLines: {
    textAlignVertical: 'top',
    paddingVertical: 12,
  },
  warning: {
    color: '#EC521E',
    fontSize: 12,
    textAlign: 'right'
  },
  warningContainer: {
    paddingHorizontal: 10,
    position: "absolute",
    top: 55,
    paddingHorizontal: 10,
    backgroundColor: '#000000cf',
    zIndex: 1,
    right: 0,
  },
  secure: {
    paddingRight: 35,
  },
  eye: {
    position: 'absolute',
    right: 10,
    top: 13,
  },
  placeholder: {
    color: color.gray,
    fontSize: 16,
  },
  placeholderContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
