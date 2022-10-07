import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import * as dummyStoryData from '../../DUMMY_DATA/storiesData';
import AddStory from "./AddStory";

import Story from "./Story";

export default Stories = ({navigation}) => {

    const renderStory = (item) => {
        return <Story item={item} navigation={navigation} />
    }

    return (
        <View style={styles.listContainer}>
            <AddStory />
            <FlatList
                contentContainerStyle={styles.contentContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyStoryData.default}
                renderItem={({ item }) => renderStory(item)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 85,
        justifyContent: 'center',
        backgroundColor: '#fffc'
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})