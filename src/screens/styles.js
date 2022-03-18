import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../common'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.BACKGROUND
    },
    itemContainer: {
        flex: 1,
        width: width,
        alignItems: 'center',
        flexWrap:'wrap'
    },
    rowItem: {
        height: 250,
        // width: width,
        justifyContent: 'center',
        marginTop: 20,
        alignItems:'center'
    },
    footerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'transparent'
    }
})

export default styles;