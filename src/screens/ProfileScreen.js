import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EmptyContent from '../components/EmptyContent';
import { accentColor, deviceHeight, paleCream } from '../styles';

/**
 * @param {*} props 
 * @returns 
 */
function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>{`Welcome ${props.userName}!`}</Text>
            <EmptyContent iconName="construct-outline" text="Coming soon..." />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: paleCream
    },
    welcomeText: {
        color: accentColor,
        position: 'absolute',
        top: deviceHeight * 0.3,
        fontSize: 26,
        fontWeight: '600',
        fontStyle: 'italic'
    }
});

function mapStateToProps(state) {
    return {
        userName: state.userName
    };
}
function mapDispatchToProps() { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);