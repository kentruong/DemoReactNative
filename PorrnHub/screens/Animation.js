import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Platform, Keyboard, TouchableOpacity, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Animation extends Component {
    constructor() {
        super();
        this.Animation = new Animated.Value(0);
        this.state = {
            showImage: false,
            backgroundColorButton: "red",
            displayHeader: "flex"
        }
    }

    UNSAFE_componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        // this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        // alert('Keyboard Shown');

        this.setState({ showImage: true })
        console.log(this.state.showImage);
        // if (this.state.showImage == true) {
        //     this.setState({ backgroundColorButton: "green" })
        //     this.setState({ displayHeader: "none" })
        // }
        // else {
        //     alert("false")
        // }

        this.setState({ displayHeader: "none" })
        // Animated.timing(

        // )
        // this.StartBackgroundColorAnimation();
    }
    _keyboardDidHide = () => {
        // this.setState({ showImage: true })
        this.setState({ displayHeader: "flex" })
    }

    componentDidMount() {
        // If you want to Start the animation on button click then call this function on button onPress event.
        // this.StartBackgroundColorAnimation();
    }
    // componentWillUnmount() {
    //     this.keyboardDidShowListener.remove();
    //     this.keyboardDidHideListener.remove();
    // }


    StartBackgroundColorAnimation = () => {
        this.Animation.setValue(0);

        Animated.timing(
            this.Animation,
            {
                toValue: 1,
                duration: 2000
            }
        ).start();
        // ).start(() => { this.StartBackgroundColorAnimation() });
    }
    render() {
        const BackgroundColorConfig = this.Animation.interpolate(
            {
                inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                outputRange: ['#FFEB3B', '#CDDC39', '#009688', '#03A9F4', '#3F51B5', '#FFEB3B']

            });
        const heightHeader = this.Animation.interpolate(
            {
                inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                outputRange: [400, 350, 300, 250, 200, 150]
            });
        const { displayHeader } = this.state
        return (
            // , { backgroundColor: BackgroundColorConfig }
            <ScrollView>
                <Animated.View style={[styles.MainContainer, { backgroundColor: BackgroundColorConfig }]}>
                    {/* <Animated.View style={{ ...styles.header, height: heightHeader, display: displayHeader }}></Animated.View> */}
                    <Animated.View style={{ ...styles.header, display: displayHeader }}></Animated.View>
                    <Text style={styles.TextStyle}>React Native Change background Color Using Animation</Text>
                    <View>
                        <TouchableOpacity onPress={() => { this._keyboardDidShow() }}>
                            <Text>Demo</Text>
                        </TouchableOpacity>
                        <TextInput placeholder="click here" />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        />
                        <Button color={this.state.backgroundColorButton} title="Button" onPress={() => this.StartBackgroundColorAnimation()} />

                    </View>

                </Animated.View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        // display: "none",
        height: 400,
        width: "100%",
        backgroundColor: "green",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    MainContainer:
    {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0
    },

    TextStyle: {

        color: "#000",
        fontSize: 20,
        textAlign: 'center'
    }
});