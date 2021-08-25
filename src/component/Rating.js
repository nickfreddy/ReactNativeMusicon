import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../common/color';
import MyIcon from './MyIcon';



const Rating = (props) => {
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const [multiSars, setMultiSars] = useState([])
  const [ratingCount, setRatingCount] = useState(props.number)

  useEffect(() => {
    Animated.timing(widthAnimation, {
      toValue: (props.number * 14 / 5),
      duration: 1000,
      useNativeDriver: true,
    }).start();

    if (props.multiple) {
      resetStars(props.number);
    }

  }, [props.number])

  const resetStars = (starCount) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        arr[i] = true
      } else {
        arr[i] = false
      }
    }
    setMultiSars(arr);
  }

  const starClicked = (index) => {
    resetStars(index + 1);
    setRatingCount(index + 1);
    props.action && props.action(index + 1);
  }


  const cobaAnimation = {
    width: (props.number / 5 * 14),
  }

  return (
    <View>
      {props.multiple ?
        <View>
          <View style={styles.starsContainer}>
            {multiSars.map((star, i) => {
              return star ?
                <TouchableOpacity onPress={() => { starClicked(i) }} key={i}>
                  <MyIcon 
                    source={require('../asset/icon/star.png')}
                    size={30}
                    color={color.blue} 
                  />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => { starClicked(i) }} key={i}>
                  <MyIcon 
                    source={require('../asset/icon/starOutline.png')}
                    size={30}
                    color={color.blue} 
                  />
                </TouchableOpacity>
            })}
          </View>
        </View>
        :
        <View>
          <View>
            <MyIcon 
              source={require('../asset/icon/star.png')}
              size={14}
              color={color.gray} 
            />
          </View>
          <Animated.View style={[styles.singleStarTop, cobaAnimation]}>
            <MyIcon 
              source={require('../asset/icon/star.png')}
              size={14}
              color={color.blue} 
            />
          </Animated.View>
        </View>
      }
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
  singleStarTop: {
    overflow: 'hidden',
    width: 0,
    height: 14,
    position: 'absolute',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
})
