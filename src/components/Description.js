import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';




/**
 * @returns Description UI Component for post descriptions.
 */
const Description = ({ postId, description, owner }) => {


    const onPressHandler = (id) => {
        return;
        // Should navigate to Comments screen.
    }

    return (
        <TouchableOpacity onPress={() => onPressHandler(postId)} style={styles.container}>
            <Text numberOfLines={2} ellipsizeMode="tail">
                <Text style={styles.owner}>{owner}</Text>
                <Text> {description}</Text>
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        maxHeight: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    heartContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    owner: {
        fontWeight: '600'
    }
})

export default Description;