import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { accentColor, primaryColor } from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const myProfileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQF22K6GVGXPSFzVwtcaxYMiLULvhDwy-dQ&usqp=CAU";
const AddStory = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: myProfileImage }}
                    resizeMode='stretch'
                />
            </View>
            <Text style={styles.storyText}>Your Story</Text>
            <View style={styles.addIconContainer}>
                <Ionicons name='add' size={20} color='white' />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: 75,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: accentColor,
        borderWidth: 0.3,
        overflow: 'hidden',
        borderColor: primaryColor
    },
    imageStyle: {
        borderWidth: 0.3,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    storyText: {
        fontWeight: "300"
    },
    addIconContainer: {
        position: 'absolute',
        backgroundColor: accentColor,
        opacity: 0.75,
        borderRadius: 10,
        right: 6,
        bottom: 18
    }
});

export default AddStory;