import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { accentColor, deviceHeight, deviceWidth } from "../styles";
import Comments from "./Comments";
import PostDate from "./Date";
import Description from "./Description";
import FlatListIndicator from "./FlatListIndicator";
import Likes from "./Likes";
import PostImage from "./PostImage";
import VideoPost from "./VideoPost";

const Post = ({ post, currentlyVisible, isFocused }) => {
    const [likes, setLikes] = React.useState(parseInt(post.likes));
    const [isLiked, setIsLiked] = React.useState(post.isLiked);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const postOnPress = () => {
        if (isLiked) setLikes(likes - 1)
        else setLikes(likes + 1)
        setIsLiked(!isLiked)
    }

    /**
     * @param {*} item 
     * @returns Carousel Image component for each image of multiple imaged post. 
     */
    function renderCarousel(item) {
        return (
            <View style={styles.carouselItemContainer}      >
                <PostImage post={item} postOnPress={postOnPress} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.postOwnerContainer}>
                <View>
                    <Image
                        style={styles.imageStyle}
                        resizeMode='contain'
                        source={post?.userAvatar
                            ? { uri: post?.userAvatar }
                            : require('../../assets/anonymous-user.png')
                        }
                    />
                </View>
                <View style={styles.postDataContainer}>
                    <Text style={styles.userName}>{post.userName}</Text>
                    {post.location
                        ? <Text style={styles.location}>{post.location}</Text>
                        : null
                    }
                </View>
            </View>

            {!post.isVideo ?
                !post.isMultiplePost
                    ? <PostImage postOnPress={postOnPress} post={post.Post1} />
                    : (
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <FlatList
                                data={[post.Post1, post.Post2]}
                                horizontal
                                style={{ height: '100%' }}
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => renderCarousel(item)}
                                onMomentumScrollEnd={(event) => {
                                    const index = Math.floor(
                                        Math.floor(event.nativeEvent.contentOffset.x) /
                                        Math.floor(event.nativeEvent.layoutMeasurement.width)
                                    );
                                    setCurrentIndex(index);
                                }}
                            />
                            <FlatListIndicator length={2} currentIndex={currentIndex} />
                        </View>
                    )
                : <VideoPost isFocused={isFocused} currentlyVisible={currentlyVisible} post={post} />
            }


            <View style={styles.descriptionAndCommentsContainer}>

                <Likes
                    setIsLiked={setIsLiked}
                    isLiked={isLiked}
                    likes={likes}
                    setLikes={setLikes}
                />
                <Description postId={post.id} description={post.description} owner={post.userName} />
                <Comments comments={post.comments} />
                <PostDate date={post.createdAt} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: deviceHeight * 0.7,
        width: deviceWidth,
        marginBottom: 22,
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 0.2,
        borderColor: 'white'
    },
    carouselItemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth,
        borderRadius: 3,
        overflow: "hidden",
    },
    carouselImageStyle: {
        borderRadius: 3,
        overflow: "hidden",
        width: deviceWidth * 0.9,

    },
    postOwnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 12,
    },
    imageStyle: {
        borderRadius: 25,
        borderWidth: 0.8,
        borderColor: accentColor,
        overflow: 'hidden',
        width: 50,
        height: 50,
        marginRight: 5
    },
    postDataContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    userName: {
        fontWeight: '400'
    },
    location: {
        fontWeight: '300',
        fontSize: 12
    },
    descriptionAndCommentsContainer: {
        marginHorizontal: 5
    }
});

export default Post;