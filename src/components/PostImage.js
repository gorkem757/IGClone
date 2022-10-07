import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";


const DEFAULT_IMAGE = require('../../assets/anonymous-user.png');

/**
 * @returns UI Component for image posts. (To be used for both multiple and singular image posts).
 */
const PostImage = ({ post, postOnPress }) => {

    const [lastPress, setLastPressed] = React.useState(0);

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            onPress={async () => {
                let timeDifferenceFromLastPressed = new Date().getTime() - lastPress;
                if (timeDifferenceFromLastPressed < 300) {
                    // If there was a backend connected this is the place to send the API request to send the like request. We have the post object here as well.
                    postOnPress();
                }
                setLastPressed(new Date().getTime())
            }}
        >
            <Image
                style={styles.imageContainer}
                source={post
                    ? { uri: post }
                    : DEFAULT_IMAGE
                }
                resizeMode='stretch'
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5
    },
    imageContainer: {
        flex: 1
    }
})

export default PostImage;