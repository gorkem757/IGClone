import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Ionicons from "react-native-vector-icons/Ionicons";
import { accentColor } from "../styles";

const VideoPost = ({ post, currentlyVisible, isFocused }) => {
    const video = React.useRef(null);

    const [isMuted, setIsMuted] = React.useState(true);
    const [status, setStatus] = React.useState({});

    return (
        <TouchableOpacity
            onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
            style={styles.container}
        >
            <Video
                shouldPlay={currentlyVisible && isFocused}
                ref={video}
                style={styles.video}
                source={{ uri: post.Video1 }}
                resizeMode="stretch"
                isLooping
                isMuted={!isMuted}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity onPress={() => setIsMuted(!isMuted)}
                style={styles.volumeContainer}
            >
                <Ionicons name={isMuted ? 'volume-high' : 'volume-mute'} size={20} color='white' />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    video: {
        borderWidth: 0.5,
        borderColor: accentColor,
        alignSelf: 'center',
        width: '100%',
        height: '100%'
    },
    volumeContainer: {
        position: 'absolute',
        bottom: 20,
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'black'
    },
});

export default VideoPost;