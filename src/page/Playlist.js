import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Image, TouchableOpacity, FlatList } from 'react-native';
import Container from '../component/Container';
import Header from '../component/Header';
import ImageColors from 'react-native-image-colors'
import LinearGradient from 'react-native-linear-gradient';
import color from '../common/color';
import MyText from '../component/MyText';
import MyIcon from '../component/MyIcon';
import font from '../common/font';
import MyButton from '../component/MyButton';
import newRelease from '../common/dummy/newRelease';
import MusicCard from '../component/MusicCard';
import dimension from '../common/dimension';


const Playlist = (props) => {
  const URI = require('../asset/image/image4.jpg')
  const [topColor, setTopColor] = useState(color.black2)
  const [data, setData] = useState(newRelease)

  useEffect( async () => {
    const colors = await ImageColors.getColors(URI)
    setTopColor(colors.vibrant)
  }, [])

  return (
    <Container>
      <Header title='Playlist' style={styles.header} />
      <LinearGradient 
        colors={[topColor, color.black2]} 
        style={styles.headerBoxContainer}
      >
        <View style={styles.imageContainer}>
          <Image  
            source={URI}
            style={styles.image}
          />
        </View>
      </LinearGradient>
      <View style={styles.detailContainer} >
        <View style={styles.playPlaylistBtn} >
          <TouchableOpacity>
            <MyIcon 
              source={require('../asset/icon/play.png')}
              size={48}
            />
          </TouchableOpacity>
        </View>
        <MyText style={styles.playlistTitle}>Anime Songs</MyText>
        <MyText style={styles.playlistDescription} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eleifend urna amet cras et proin magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eleifend urna amet cras et proin magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eleifend urna amet cras et proin magna.</MyText>
        <View style={styles.playlistAuthorContainer} >
          <MyText>
            By
            <MyText style={styles.author} > Yayat Hidayat</MyText>
          </MyText>
          <MyIcon 
            source={require('../asset/icon/tripleDot.png')}
            size={20}
          />
        </View>
        <View style={styles.playlistSongDetail} >
          <MyText style={styles.gray} >15 Songs</MyText>
          <MyIcon 
            source={require('../asset/icon/dot.png')}
            size={4}
            style={styles.dot}
          />
          <MyText style={styles.gray} >About 2 hr 12 min</MyText>
        </View>
        <View style={styles.addSong}>
          <MyButton title='Add Song' plus />
        </View>
      </View>
      <FlatList
          data={data}
          keyExtractor={(item)=> item.id}
          renderItem={(item)=> <MusicCard item={item} />}
          ListFooterComponent={()=> <View style={styles.footer} />}
          contentContainerStyle={styles.flatlistContainer}
          // onScroll={Animated.event(
          //   [
          //     {
          //       nativeEvent: {
          //         contentOffset: {
          //           y: y,
          //         },
          //       },
          //     },
          //   ],
          //   {useNativeDriver: false}
          // )}
          // scrollEventThrottle={1}
        />
      
    </Container>
  );
}

export default Playlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'blue',
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  headerBoxContainer: {
    width: '100%',
    height: 270,
    alignItems: 'center',

  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  imageContainer: {
    elevation: 8,
    marginTop: 127,
  },
  playlistTitle: {
    fontFamily: font.bold,
    fontSize: 16,
    marginBottom: 12,
  },
  detailContainer: {
    paddingVertical: 16,
    paddingHorizontal: 22,
  },
  playlistAuthorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignItems: 'center',
  },
  playlistDescription: {
    textAlign: 'justify'
  },
  author: {
    fontFamily: font.bold,
  },
  gray: {
    color: color.gray,
  },
  playlistSongDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    marginHorizontal: 10,
  },
  playPlaylistBtn: {
    position: 'absolute',
    right: 40,
    top: -24,
  },
  addSong: {
    alignSelf: 'flex-end',
    marginTop: 28,
  },
  footer: {
    height: dimension.bottomHeight * 1.2,
    width: '100%',
  },
  flatlistContainer: {
    marginHorizontal: 22,
    backgroundColor: color.black,
    borderRadius: 8,
  }
});
