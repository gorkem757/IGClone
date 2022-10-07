import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux'

import store from './src/store';
import { AuthContext } from './src/Helpers';
import { primaryColor } from './src/styles';
import { TabHomeIconSize, TabProfileIconSize, TabSearchIconSize, TabUnFocusedSize } from './src/constants';

import HomeScreen from './src/screens/HomeScreen';
import LogInScreen from './src/screens/LogInScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StoryDetailScreen from './src/screens/StoryDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {

  const authStackOptions = {
    headerShown: false
  }

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            accessToken: action.accessToken,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            accessToken: null,
          };
      }
    }, {
    isSignout: false,
    accessToken: null
  }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (accessToken) => {
        dispatch({ type: 'SIGN_IN', accessToken: accessToken });
        return true;
      }
    })
  )

  /**
   * @param {Boolean} focused 
   * @param {*} route 
   * @returns TabBarNavigation Icon
   */
  function configureTabs(focused, route) {
    let iconName;

    if (route.name === 'Clonstagram') {
      iconName = focused
        ? 'home'
        : 'home-outline';
    }
    else if (route.name === 'Search') {
      iconName = focused ? 'search-circle' : 'search';
    }
    else if (route.name === 'Profile') {
      iconName = focused ? 'person-circle' : 'person-circle-outline';
    }
    return <Ionicons name={iconName} size={calculateTabIconSize(focused, route.name)} color={focused && primaryColor} />;
  }

  /**
   * @param {Boolean} focused 
   * @param {*} routeName 
   * @returns {Number} Icon size used because of different icons.
   */
  function calculateTabIconSize(focused, routeName) {
    if (!focused) return TabUnFocusedSize;
    if (routeName === "Search") return TabSearchIconSize;
    if (routeName === "Profile") return TabProfileIconSize;
    return TabHomeIconSize;
  }


  const HomeStackComponent = () => {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="StoryDetailScreen" component={StoryDetailScreen} />
      </HomeStack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.accessToken == null ?
            <Stack.Navigator headerMode="screen">
              <Stack.Screen setLoggedIn options={authStackOptions} name="LogIn" component={LogInScreen} />
            </Stack.Navigator>
            :
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => configureTabs(focused, route),
              })}
            >
              <Tab.Screen name="Clonstagram" options={{ headerTitleStyle: { fontStyle: 'italic' } }} component={HomeStackComponent} />
              <Tab.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}