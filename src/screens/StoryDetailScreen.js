import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { accentColor, deviceWidth } from "../styles";

function StoryDetailScreen(props) {
    const owner = props.route.params.story.ownerName;
    const image = props.route.params.story.profilePicture;
    return (
        <View style={{ backgroundColor: accentColor, flex: 1 }}>
            <Text>{owner}</Text>
            <Image
                style={{ flex: 1 }}
                source={{ uri: image }}
                resizeMode='stretch'
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default StoryDetailScreen;