import * as React from 'react';
import { Alert, ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { AuthContext } from '../Helpers';
import { accentColor, defaultFontSize, deviceWidth, paleCream } from '../styles';

const imageBackground = require('../../assets/splash.png')

const LogInScreen = (props) => {

    const { signIn } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    /**
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<Boolean>} Checks if the name and password state objects are long enough.
     *  Additional validation can be performed here. Skipped additional validation steps because told that it was not necessary.
     */
    async function checkLengthValidity(username, password) {
        if (username.length < 3) {
            Alert.alert("Username Error", "Username must be at least 3 characters.");
            return false;
        } else if (password.length < 6) {
            Alert.alert("Password Error", "Password must be at least 6 characters.");
            return false;
        } else return true;
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={imageBackground} resizeMode="stretch" style={styles.image}>
                <Text style={styles.appName}>CLONSTAGRAM</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        numberOfLines={1}
                        maxLength={13}
                        style={styles.inputField}
                        value={username}
                        placeholder="Username"
                        onChangeText={username.length <= 13 ? setUsername : null}
                        textAlignVertical="center"
                        placeholderTextColor={accentColor}
                        blurOnSubmit={true}
                    />
                    <TextInput
                        numberOfLines={1}
                        maxLength={16}
                        style={styles.inputField}
                        value={password}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={password.length <= 16 ? setPassword : null}
                        textAlignVertical="center"
                        placeholderTextColor={accentColor}
                        blurOnSubmit={true}
                        returnKeyType="done"
                    />
                </View>
                <TouchableOpacity
                    style={styles.logInButton}
                    onPress={async () => {
                        const isValid = await checkLengthValidity(username, password);
                        if (!isValid) return;
                        else {
                            await props.setUser(username);
                            signIn("DUMMY_ACCESS_TOKEN")
                        }
                    }}
                >
                    <Text style={styles.logInText}>LOGIN</Text>
                </TouchableOpacity>
            </ImageBackground >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    appName: {
        color: accentColor,
        fontWeight: "800",
        fontSize: 26,
        fontStyle: 'italic'
    },
    inputContainer: {
        padding: 5,
        width: deviceWidth * .6,
        maxWidth: deviceWidth * .6,
        alignSelf: 'center'
    },
    logInButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        backgroundColor: Platform.OS == "ios" ? "white" : accentColor,
    },
    inputField: {
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 0.3,
        borderColor: accentColor,
        borderRadius: 3,
        padding: 5,
        fontSize: 14,
        marginTop: 10,
        maxHeight: deviceWidth * .3,
    },
    logInText: {
        fontSize: defaultFontSize,
        color: Platform.OS == "ios" ? accentColor : "white",
    }
})


function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        setUser: async (username) => dispatch({ type: 'SET_USERNAME', payload: username }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);