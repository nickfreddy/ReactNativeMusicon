import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import color from '../common/color';
import font from '../common/font';
import GradientButton from './GradientButton';
import MyStatusBar from './MyStatusBar';
import MyText from './MyText';
import Rating from './Rating';
// import Ratting from './Ratting';

const MyAlert = props => {
  return (
    <View>
      <MyStatusBar alert={props.modalVisible} />
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
          setStatusBar(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <MyText style={styles.title}>
                {props.type === 'delete' 
                  ? 'Delete Playlist'
                  : 'Give Rating'
                }
              </MyText>
            </View>
            <View style={styles.body}>
              <View style={styles.content}>
                {props.type === 'delete'  
                  ? <MyText style={styles.contentText}>
                      Are You Sure You Want to Delete This Playlist?
                    </MyText>
                  : <Rating 
                      number={0} 
                      multiple 
                      action={number=> console.log(number)}
                    />
                } 
              </View>
              <View style={styles.buttonContainer}>
                <GradientButton 
                  title='Cancel' 
                  // active={props.type === 'delete' ? true : false}
                  cancel
                  // cancel={props.type === 'delete' ? false : true}
                  round
                  action={() => {
                    props.setModalVisible(false)
                  }}
                />
                <View style={styles.sparator}/>
                <GradientButton 
                  title={props.type === 'delete' ? 'Delete' : 'Save'} 
                  active={props.type === 'delete' ? false : true}
                  warning={props.type === 'delete' ? true : false}
                  round
                  action={() => {
                    props.setModalVisible(false)
                    props.action && props.action()
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default MyAlert

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0000009C',
  },
  modalView: {
    width: '90%',
    backgroundColor: color.black2,
    borderRadius: 8,
    marginHorizontal: 29,
    alignItems: "center",
  },
  header: {
    backgroundColor: color.black,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomColor: color.gray3,
    borderBottomWidth: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 16,
  },
  body: {
    padding: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  sparator: {
    width: 12,
  },
  content: {
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
  }
})
