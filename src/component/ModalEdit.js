import React, { useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../common/color';
import font from '../common/font';
import GradientButton from './GradientButton';
import ImagePicker from './ImagePicker';
import MyIcon from './MyIcon';
import MyInput from './MyInput';
import MyText from './MyText';

const ModalEdit = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        fullScreen={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.action('cancel');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeBtn}>
              <TouchableOpacity
                onPress={()=> props.action(null)}
              >
                <MyIcon 
                  source={require('../asset/icon/close.png')} 
                  size={42} 
                />
              </TouchableOpacity>
            </View>
            <MyText style={styles.label}>Change Photo</MyText>
            <ImagePicker />
            <MyText style={styles.label}>Playlist Title</MyText>
            <MyInput
              placeholder='Input Title'
              value={title}
              onChangeText={e => setTitle(e)}
              pattern={[
                ['(?!^$)','not empty']
              ]}
              onValidation={(e)=> {}}
              style={styles.inputCenter}
            />
            <MyText style={styles.label}>Description</MyText>
            <MyInput
              placeholder='Input Description'
              value={description}
              onChangeText={e => setDescription(e)}
              pattern={[
                ['(?!^$)','not empty']
              ]}
              onValidation={(e)=> {}}
              numberOfLines={6}
            />
            <View style={styles.btn}>
              <GradientButton 
                title={props.edit ? 'Save' : 'Add'} 
                round
                active
                action={() => {
                  props.action && props.action(null)
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalEdit

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "flex-end",
    marginTop: 'auto',
    height: '100%'
  },
  modalView: {
    backgroundColor: color.gray2,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: 'center',
    height: '90%',
    paddingTop: 72,
  },
  closeBtn: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  label: {
    fontFamily: font.bold,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  inputCenter: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 32,
  },
  btn: {
    height: 43,
    width: 142,
    alignSelf: 'center',
    marginTop: 44,
  }
})
