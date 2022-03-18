import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles';
import { fetchVideos } from '../redux/actions/videoAction'
import { useDispatch, useSelector } from 'react-redux';
import Video from 'react-native-video';
import { CustomButton } from '../components';
import VideoView from '../components/VideoView';
import { Colors } from '../common';
const { width, height } = Dimensions.get('window');

/**
* @Component VideoCarousel.js
* @Use Render Video Carousel view
**/

const VideoCarousel = () => {
    const flatList = useRef(null)
    const { videos, loader } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        dispatch(fetchVideos())
    }, [])

    const renderCarouselItem = ({ item, index }) => {
        return (
            <View>
                {index === currentIndex && item?.length > 0 ?
                    <View style={[styles.itemContainer]}>
                        {
                            item?.map((subItem, i) => {
                                return (
                                    <View style={styles.rowItem} key={i}>
                                        <VideoView
                                            uri={subItem?.video_url}
                                            posterUri={subItem?.thumbnail_url}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View> :
                    <View style={styles.itemContainer}>
                        <View style={[styles.rowItem, { backgroundColor: Colors.LIGHT_BLACK }]} />
                        <View style={[styles.rowItem, { marginTop: 25, backgroundColor: Colors.LIGHT_BLACK }]} />
                    </View>
                }
            </View>

        )
    }
    const renderEmpltyList = () => {
        return (
            <View style={{ width: width, height: height / 2, justifyContent: 'center' }}>
                <Text style={{ color: '#000', textAlign: 'center' }}>Data not found</Text>
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <FlatList
                ref={flatList}
                scrollEnabled={false}
                data={videos || []}
                numColumns={1}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderCarouselItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={renderEmpltyList}
            />
            <View style={styles.footerContainer}>
                <CustomButton text={"Pre"} customStyle={{ width: 50 }} disabled={currentIndex > 0 ? false : true} onPress={() => {
                    if (currentIndex >= 0) {
                        flatList?.current?.scrollToIndex({ animated: true, index: currentIndex - 1 })
                        setCurrentIndex(currentIndex - 1)
                    }
                }
                } />
                <CustomButton text={"Next"} customStyle={{ width: 50 }} disabled={currentIndex < videos?.length-1 ? false : true} onPress={() => {
                    if (currentIndex < videos?.length-1) {
                        flatList?.current?.scrollToIndex({ animated: true, index: currentIndex + 1 })
                        setCurrentIndex(currentIndex + 1)
                    }
                }} />
            </View>
        </View>
    )
}

export default VideoCarousel 