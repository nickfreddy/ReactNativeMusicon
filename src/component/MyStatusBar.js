import React from 'react'
import { StatusBar } from 'react-native'

const MyStatusBar = () => {
  return (
    <StatusBar
      translucent
      animated
      backgroundColor='#00000000'
      barStyle='light-content'
      showHideTransition='slide'
    />
  )
}
 
export default MyStatusBar
