import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Video } from 'expo-av';
import { deviceWidth } from '../styles';

const GridContent = ({ posts, isFocused }) => {
    const video = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    React.useEffect(() => {
        if (isFocused) setIsPlaying(true);
        return () => {
            setIsPlaying(false);
        }
    }, [isFocused])

    const renderItem = (item) => {
        return (
            <View style={styles.itemContainer}>
                {item.isVideo
                    ? <Video
                        shouldPlay={isPlaying && isFocused}
                        ref={video}
                        style={styles.item}
                        source={{ uri: item.url }}
                        resizeMode="stretch"
                        isLooping={false}
                        isMuted={true}
                    />
                    : <Image style={styles.item} source={{ uri: item.photoUrl }} />
                }
            </View>
        );
    }
    return (

        <FlatList
            style={styles.list}
            data={posts}
            numColumns={3}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => renderItem(item)}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 125,
        maxWidth: deviceWidth / 3
    },
});

export default GridContent;