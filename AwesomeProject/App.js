/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Button
} from 'react-native';

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components';

import { Styles } from "./src/assets/css";
import Avatar from "./src/components";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const logo = {
    display: 'flex',
    justifyContent: 'center',
}

const logoBorn = {
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 5,
    paddingVertical: 5,
}

const logoHub = {
    fontWeight: 'bold',
    backgroundColor: '#FFC107',
    color: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
}

const Buttons = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default class App extends Component {
    //kieemrtra css theo điều kiện
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    render() {
        const { isActive } = this.state
        return (
            // <View>
            //     <View style={logo}>
            //         <Text style={logoBorn}>
            //             Porn
            //         </Text>
            //         <Text style={logoHub}>
            //             hub
            //         </Text>
            //     </View>
            //     <View style={{
            //         width: '100%',
            //         height: 50,
            //         textAlign: 'center',
            //         backgroundColor: 'pink',
            //         display: 'flex',
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //     }}>
            //         <Text
            //             style={{
            //                 color: 'white',
            //             }}>Viết style trực tiếp trên view</Text>
            //     </View>
            //     <View style={[Styles.header,
            //     isActive ? Styles.displayFlex : Styles.header,
            //     ]}>
            //         <Text>fasfdasfd</Text>
            //     </View>
            // </View>
            <View style={Styles.container}>
                <View style={Styles.contentImage}>
                    {/* <Buttons>123</Buttons> */}
                    {/* <Title>Hello World, this is my first styled component!</Title> */}
                    <Image style={Styles.imageBackground} source={require('./src/assets/images/img_background.png')} />
                </View>
                <View style={Styles.enterInfo}>
                    <View style={Styles.groupInfo}>
                        <View style={Styles.containerIconGroupInfo}>
                            <IconAntDesign style={Styles.iconGroupInfo} name="earth" color="#94999F" size={20} />
                        </View>
                        <TextInput style={Styles.textInput} placeholder="Region" />
                    </View>
                    <View style={Styles.groupInfo}>
                        <View style={Styles.containerIconGroupInfo}>
                            <IconMaterialCommunityIcons style={Styles.iconGroupInfo} name="account-outline" color="#94999F" size={25} />
                        </View>
                        <TextInput style={Styles.textInput} placeholder="Phone" />
                    </View>
                    <View style={Styles.groupInfo}>
                        <View style={Styles.containerIconGroupInfo}>
                            <IconFoundation style={Styles.iconGroupInfo} name="key" color="#94999F" size={20} />
                        </View>
                        <TextInput style={Styles.textInput} placeholder="Password" keyboardType='numeric' />
                    </View>
                </View>
                <View style={Styles.actions}>
                    <Button style={Styles.buttonLogin} title="Login" />
                </View>
                {/* <Icon name="alpha-e-box" color="#FF0000" size={80} /> */}
                {/* <View style={Styles.top}>
                    <View style={[Styles.topLeft, { backgroundColor: 'gray' }]}>
                        <View style={Styles.topLeftOne}>
                            <Image source={require('./src/assets/images/img_background.png')} />
                        </View>
                        <View style={Styles.topLeftTwo}>
                            <Text style={Styles.addFonts}>Hello </Text>
                            <Icon name="alpha-e-box" color="#eee" size={30} />
                        </View>
                    </View>
                    <View style={[Styles.topRight, { backgroundColor: 'pink' }]}></View>
                </View>
                <View style={Styles.bottom}>
                    <View style={[Styles.bottomLeft, { backgroundColor: 'gray' }]}></View>
                    <View style={[Styles.bottomRight, { backgroundColor: 'pink' }]}></View>
                </View> */}
            </View>
        )
    }
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
// });

// export default App;
