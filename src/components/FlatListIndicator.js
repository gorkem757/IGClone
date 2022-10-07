import React from "react";
import { FlatList, View, } from "react-native";
import FlatListIndicatorCircle from "./FlatlistIndicatorCircle";

const FlatListIndicator = ({ length, currentIndex }) => {
    return (
        <FlatList
            horizontal
            scrollEnabled={false}
            data={new Array(length)}
            renderItem={({ item, index }) => {
                return (
                    <View style={{ height: 12 }}>
                        <FlatListIndicatorCircle isActiveIndex={index === currentIndex} />
                    </View>
                );
            }}
        />

    );
}

export default FlatListIndicator;