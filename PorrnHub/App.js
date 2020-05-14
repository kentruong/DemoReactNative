/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();



import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Styles } from "./src/assets/css";

import Login from "./screens/Login"
import Home from "./screens/Home"


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Home />
        </View>
    );
}

function LoginScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Login />
            {/* <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Welcome' }} />
            </Stack.Navigator>
            <Text >Porn</Text>
            <Text >hub</Text> */}
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            fontSize="30"
            barStyle={{
                backgroundColor: '#FF9800',
            }}
        >
            <Tab.Screen name="Login" component={LoginScreen}
                options={{
                    tabBarLabel: 'Logout',
                    tabBarIcon: ({ color }) => (
                        <IconAntDesign name="logout" color={color} size={18} />
                    ),
                }}
            />
            <Tab.Screen style={styles.nameNavigator} name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <IconAntDesign name="home" color={color} size={18} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    // nameNavigator: {
    //     color: "red"
    // },  
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});






// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



