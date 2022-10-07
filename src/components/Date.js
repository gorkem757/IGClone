import React from 'react';
import { StyleSheet, Text } from 'react-native';

/**
 * @returns Heart UI components that indicates if the post is liked or not. Also displays the number of likes.
 * TODO: Update this components so that it returns <hours ago> if the same day, <days ago> if the same week and <weeks ago> else.
 */
const PostDate = ({ date }) => {
    const dateObj = new Date(date);
    return (
        <Text style={styles.dateText}>{dateObj.toString().substring(0, 16)}</Text>
    );
}
const styles = StyleSheet.create({
    dateText: {
        color: '#bbc',
        fontSize: 12
    }
})

export default PostDate;