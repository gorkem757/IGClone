import * as React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View, SafeAreaView, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux';
import routes from '../apiRoutes';
import EmptyContent from '../components/EmptyContent';
import GridContent from '../components/GridContent';
import { Get } from '../Controllers/httpController';
import { accentColor, deviceHeight, deviceWidth, paleCream } from '../styles';
import { useIsFocused } from '@react-navigation/native';

/**
 * @param {*} props 
 * @returns Search Screen
 */
function SearchScreen(props) {
    const isFocused = useIsFocused();
    const [search, setSearch] = React.useState();
    const [randomPosts, setRandomPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [searchedData, setSearchedData] = React.useState([]);


    React.useEffect(() => {
        getRandomPosts();
    }, []);

    /**
     * Dummy API call for dummy posts data.
     */
    const getRandomPosts = async () => {
        const response = await Get(routes.Posts.getRandomPosts);
        if (!response) {
            Alert.alert("Error", "Could not get the response. Check your connection and try again later.")
        } else {
            setRandomPosts(response);
        }
        setLoading(false);
    }

    /**
     * @param {String} search 
     * Filters posts by their name property. 
     */
    const searchFilterFunction = search => {
        const newData = randomPosts.filter(post => {
            const postData = `${post.name.toUpperCase()}`;

            const searchData = search.toUpperCase();

            return postData.indexOf(searchData) > -1;
        });

        setSearchedData(newData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search...'
                    value={search}
                    onChangeText={(text) => {
                        setSearch(text);
                        searchFilterFunction(text);
                    }}
                    style={styles.inputStyle}
                    selectionColor={accentColor}
                />
            </View>
            {loading
                ? <ActivityIndicator size={25} color={accentColor} />
                : <GridContent isFocused={isFocused} posts={searchedData.length > 0 ? searchedData : randomPosts} />
            }


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight
    },
    searchContainer: {
        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: 6,
        left: 0,
        width: deviceWidth,
        height: 30
    },
    inputStyle: {
        paddingLeft: 5,
        borderWidth: 0.6,
        borderRadius: 12,
        backgroundColor: 'white',
        width: '92%',
        marginHorizontal: '4%'
    },
});

function mapStateToProps(state) {
    return {
        userName: state.userName
    };
}
function mapDispatchToProps() { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);