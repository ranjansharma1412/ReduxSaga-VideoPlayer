import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../common'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK,
        borderRadius: 5
    },
    buttonText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    control: {
        position: 'relative',
        top: -150,
        width: width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoContainer: {
        height: 250,
        width: width,
        alignItems: 'center',
    }
})

export default styles;