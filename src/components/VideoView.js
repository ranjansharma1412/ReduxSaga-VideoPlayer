import React, { useEffect, useRef, useState } from 'react'
import { View, Dimensions, ActivityIndicator, Text, TouchableOpacity, Animated } from 'react-native'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../common';
import styles from './styles';
const { width, height } = Dimensions.get('window');

const VideoView = ({ uri, posterUri, isPaused }) => {
    const videoRef = useRef(null)
    const [timout, settimout] = useState(null)
    const [paused, setPaused] = useState(isPaused || false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [showControl, setShowControl] = useState(true)

    const hideControl = () => {
        let timout = setTimeout(() => {
            setShowControl(false)
        }, 5000);
        settimout(timout)
    }

    return (
        <TouchableOpacity activeOpacity={1} style={styles.videoContainer} onPress={() => setShowControl(!showControl)}>
            <Video
                ref={videoRef}
                source={{ uri: uri }}
                poster={posterUri}
                onBuffer={() => setLoading(true)}
                onLoadStart={() => setLoading(true)}
                onReadyForDisplay={() => setLoading(false)}
                paused={paused}
                onError={() => setError("Unable to Play")}
                resizeMode="contain"
                posterResizeMode="cover"
                style={{ height: 250, width: width - 50 }}
            />
            <View style={styles.control}>
                {error && <Text style={{ color: Colors.RED }}>{error} </Text>}
                {loading ?
                    <ActivityIndicator size={"large"} color={Colors.LIGHT_BLACK} /> :
                    showControl &&
                    < Icon onPress={() => { setPaused(!paused); hideControl() }} name={paused ? 'play-circle-outline' : 'pause-circle-outline'} size={50} color={Colors.LIGHT_BLACK} style={{ alignSelf: 'center', zIndex: 99 }} />
                }
            </View>
        </TouchableOpacity>
    )
}

export default VideoView