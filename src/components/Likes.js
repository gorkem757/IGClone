import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { accentColor } from '../styles';

/**
 * @returns Heart UI components that indicates if the post is liked or not. Also displays the number of likes.
 */
const Likes = ({ isLiked, setIsLiked, likes, setLikes }) => {

    function heartOnPressHandler() {
        if (isLiked) setLikes(likes - 1)
        else setLikes(likes + 1)
        setIsLiked(!isLiked)
    }
    function onCommentPressed() {
        // Firstly get the comments and than navigate to the comments screen when implemented. 
        // So this function would actually take the postId as the parameter in real case.
        return;
    }

    return (
        <View style={styles.container}>
            <View style={styles.actionsContainer}>
                <TouchableOpacity
                    onPress={() => heartOnPressHandler()}
                    style={styles.heartContainer}
                >
                    <Ionicons name={isLiked ? 'heart-sharp' : 'heart-outline'} size={27} color={accentColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onCommentPressed()}>
                    <Ionicons name={'chatbubble-outline'} size={23} color={accentColor} />
                </TouchableOpacity>
            </View>
            {likes > 0 &&
                <Text style={styles.likes}>{`${likes} ${likes > 1 ? "likes" : "like"}`}</Text>
            }

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 3,
        marginBottom: 5
    },
    actionsContainer: {
        flexDirection: 'row',
    },
    heartContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    likes: {
        fontWeight: '600',
    }
})

export default Likes;