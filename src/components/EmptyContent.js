import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { defaultFontSize, fontColor } from '../styles';

/**
 * Component to show on screens that have 0 item in their list
 * @param {string} iconName
 * @param {string} text 
 * iconName should be from Fontisto
 */
function EmptyContent({ iconName, text }) {
    return (
        <View style={styles.container}>
            <Ionicons name={iconName} size={100} color={fontColor} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: fontColor,
        marginTop: 5,
        fontSize: defaultFontSize + 5,
        fontWeight:'300'
    }
});
export default EmptyContent;