import React, { useRef, useState } from 'react'
import { FlatList, StyleSheet, View, Animated } from 'react-native'
import font from '../common/font'
import Container from '../component/Container'
import GradientButton from '../component/GradientButton'
import Header from '../component/Header'
import Hero from '../component/Hero'
import MyText from '../component/MyText'
import newRelease from '../common/dummy/newRelease'
import Card from '../component/Card'
import dimension from '../common/dimension'
import color from '../common/color'


const Home = () => {

  const [album, setAlbum] = useState(newRelease)
  const y = useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const HEIGHT = 300

  const translateY = y.interpolate({
    inputRange: [0, HEIGHT * 2],
    outputRange: [0, -HEIGHT],
    extrapolate: 'clam',
  });
  
  const height = y.interpolate({
    inputRange: [0, HEIGHT * 2],
    outputRange: [HEIGHT, 0],
    extrapolate: 'clamp',
  });


  return (
    <Container>
      <Header title='Home' style={styles.header} />
      <View style={styles.container} >
        <Animated.View
          style={[styles.heroContainer, { transform: [{ translateY }]}]}
        >
          <MyText style={styles.sectionTitle}>Hi Yayat,</MyText>
          <Hero style={styles.hero} />
          <MyText style={styles.sectionTitle}>New Releases</MyText>
        </Animated.View>
        <Animated.View style={{height}} />
          <View style={styles.buttonContainer}>
            <GradientButton title='Album' active/>
            <GradientButton title='Songs' style={styles.midleBtn} />
            <GradientButton title='Artist' />
          </View>
        <AnimatedFlatList
          data={album}
          keyExtractor={(item)=> item.id}
          renderItem={(item)=> <Card item={item} />}
          numColumns={2}
          ListFooterComponent={()=> <View style={styles.footer} />}
          columnWrapperStyle={styles.flatlistContainer}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: y,
                  },
                },
              },
            ],
            {useNativeDriver: false}
          )}
          scrollEventThrottle={1}
        />
      </View>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: font.bold,
    fontSize: 20,
    marginTop: 12,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 28
  },
  midleBtn: {
    marginHorizontal: 8,
  },
  footer: {
    height: dimension.bottomHeight * 1.2,
    width: '100%',
  },
  flatlistContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  hero : {
    marginHorizontal: 20,
  },
  heroContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  header: {
    backgroundColor: color.black2,
    zIndex: 2,
  }
})
