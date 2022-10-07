import React from "react";
import { StyleSheet, View } from "react-native";
import { accentColor } from "../styles";

const FlatListIndicatorCircle = ({ isActiveIndex }) => {
    return (
        <View style={[styles.container, { backgroundColor: isActiveIndex ? accentColor : 'transparent' }]}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: accentColor,
        width: 8,
        height: 8,
        borderRadius: 4,
        overflow: 'hidden',
        marginHorizontal: 0.5
    }
})

export default FlatListIndicatorCircle;