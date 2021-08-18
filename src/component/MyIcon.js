import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const MyIcon = props => {
  return (
    <Image 
      source={props.source}
      width={props.size}
      height={props.size}
      style={[
        {
          height: props.size,
          width: props.size
        },
        props.color && {
          tintColor: props.color
        },props.style && props.style
      ]}
    />
  )
}

export default MyIcon
