import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * @returns Heart UI components that indicates if the post is liked or not. Also displays the number of likes.
 */
const Comments = ({ comments }) => {


    const onSeeAllCommentsPressed = (comments) => {
        // Firstly get the comments and than navigate to the comments screen when implemented. 
        // So this function would actually take the postId as the parameter in real case.
        return;
    }

    if (!comments || comments.length === 0)
        return;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onSeeAllCommentsPressed(comments) }}>
                <Text style={styles.seeAllComments}>{`${comments.length} see all comments...`}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    seeAllComments: {
        color: '#bbb',
        fontSize: 14
    }
})

export default Comments;