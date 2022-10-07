import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import {  deviceWidth } from "../styles";

function StoryDetailScreen(props) {
    const owner = props.route.params.story.ownerName;
    const image = props.route.params.story.profilePicture;
    return (
        <View style={styles.container}>
            <View style={styles.storyOwnerContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: image }}
                    resizeMode='stretch'
                />
                <Text style={styles.ownerName}>{owner}</Text>
            </View>
            <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode='stretch'
            />
            <BackButton onPressed={()=>props.navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    storyOwnerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 5,
        width: deviceWidth,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: "hidden",
        marginRight: 10
    },
    ownerName: {
        fontSize:20,
        fontWeight:'300',
        color:'#ddd'
    },
    image: {
        flex: 1
    },

});

export default StoryDetailScreen;