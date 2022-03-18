import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'
import { Colors } from '../common'

/**
* @Component CustomButton.js
* @Use render a common button
* @Params text, onPress, customStyle, disabled, isLoading
**/
const CustomButton = ({ text, onPress, customStyle, disabled}) => {
    return (
        <TouchableOpacity activeOpacity={disabled ? 0 : 1} disabled={disabled || false} style={[styles.button, customStyle, { backgroundColor: disabled ? Colors.LIGHT_BLACK : Colors.BLACK }]} onPress={onPress}>
           <Text style={{ color: Colors.WHITE }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton