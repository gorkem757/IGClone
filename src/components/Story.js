import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { accentColor, primaryColor } from "../styles";

export default Story = ({ navigation, item }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            navigation.navigate("StoryDetailScreen", { story: item })
        }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    source={item?.profilePicture
                        ? { uri: item?.profilePicture }
                        : require('../../assets/anonymous-user.png')
                    }
                    resizeMode='stretch'
                />
            </View>
            <Text>{item?.ownerName || "User"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        marginHorizontal: 5,
        alignItems: 'center',
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
})