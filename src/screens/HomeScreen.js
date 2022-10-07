import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Alert, FlatList } from 'react-native';
import { connect } from 'react-redux';
import routes from '../apiRoutes';
import EmptyContent from '../components/EmptyContent';
import Post from '../components/Post';
import Stories from '../components/Stories';
import { Get } from '../Controllers/httpController';
import { accentColor, deviceHeight, deviceWidth, paleWhite, primaryColor } from '../styles';

function HomeScreen(props) {

    const isFocused = useIsFocused();
    const [loading, setLoading] = React.useState(true);
    const [loadingPosts, setLoadingPosts] = React.useState(true);
    const [posts, setPosts] = React.useState([]);
    const [currentPostIndex, setCurrentPostIndex] = React.useState(0);
    const [page, setPage] = React.useState(1); // Implemented for pagination purposes not used. Requires backend development as well.
    const [loadingMorePosts, setLoadingMorePosts] = React.useState(false); // Implemented for pagination purposes not used. Requires backend development as well.

    /**
     * Getting posts with pagination.
     */
    // async function getPostPaginated(page) {
    //     setLoadingMorePosts(true);
    //     const response = await Get(routes.Posts.getAll,page);
    //     if (!response) {
    //         Alert.alert("Error", "Could not get the response. Check your connection and try again later.")
    //     } else {
    //         setPosts([...posts,response]);
    //     }
    //     setLoadingMorePosts(false);
    // }

    /**
     * Paginated UseEffect UNUSED!
     */
    // React.useEffect(async () => {
    //     await getPostPaginated(page);
    //     setLoadingMorePosts(false);
    // }, [page]);

    async function getPosts() {
        setLoadingPosts(true);
        const response = await Get(routes.Posts.getAll);
        if (!response) {
            Alert.alert("Error", "Could not get the response. Check your connection and try again later.")
        } else {
            setPosts(response);
        }
        setLoadingPosts(false);
    }

    function renderPosts(post, index) {
        return (
            <Post isFocused={isFocused} currentlyVisible={currentPostIndex == index} post={post} />
        );
    }

    // function renderLoadingMoreDataSpinner() {
    //     if (loadingMorePosts) {
    //         <ActivityIndicator size={22} />
    //     } else return null;
    // }


    React.useEffect(async () => {
        await getPosts();
        setLoading(false)
    }, []);


    if (loading) return (
        <ActivityIndicator size={26} color={accentColor} style={{ position: 'absolute', left: deviceWidth * 0.5 - 13, top: deviceHeight * 0.5 - 26, }} />
    );

    if (!posts || posts?.length == 0) return (
        <View style={styles.container}>
            <EmptyContent iconName="construct-outline" text="No Post to show just yet.." />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<Stories navigation={props.navigation} />}
                showsVerticalScrollIndicator={false}
                refreshing={loadingPosts}
                onRefresh={() => getPosts()}
                data={posts}
                // onEndReached={() => setPage((prev) => prev + 1)}
                style={{ flex: 1, }}
                renderItem={({ item, index }) => renderPosts(item, index)}
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(
                        Math.floor(event.nativeEvent.contentOffset.y) /
                        Math.floor(event.nativeEvent.layoutMeasurement.height - 150)
                    );
                    setCurrentPostIndex(index)
                }}
            // ListFooterComponent={() => renderLoadingMoreDataSpinner()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: paleWhite
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);