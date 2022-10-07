import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EmptyContent from '../components/EmptyContent';
import { paleCream, primaryColor } from '../styles';

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
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
    title: {
        color: primaryColor
    }
});

function mapStateToProps(state) {
    return {
        userName: state.userName
    };
}
function mapDispatchToProps() { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);