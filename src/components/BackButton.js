import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @returns Touchable BackButton component. Position to bottom right corner by default. 
 * Can be updated via additionalStyle prop. onPress triggers generally navigation.goBack() function.
 */
function BackButton(props) {
    return (
        <TouchableOpacity
            style={[styles.container, props.additionalStyle || {}]}
            onPress={() => props.onPressed() || {}}
        >
            <Ionicons name='chevron-back' size={22} color='#fff' />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(220,220,220,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        borderColor: '#fff',
        borderWidth: 0.6,
        overflow: 'hidden'
    }
});

export default BackButton;