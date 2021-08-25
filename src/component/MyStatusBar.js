import React from 'react'
import {StatusBar} from 'react-native'

const MyStatusBar = props => {
  return (
    <StatusBar
      translucent
      animated
      backgroundColor={!props.alert ? '#00000000' : '#0000009C'}
      barStyle='light-content'
    />
  )
}
 
export default MyStatusBar
