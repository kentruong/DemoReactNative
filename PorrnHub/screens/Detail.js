import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from "../src/assets/css";

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default Detail = (props) => {
    return (
        <View style={Styles.wrapper}>
            <View style={Styles.container}>
                <Text style={Styles.titleLogin}>WellCome Back</Text>
                <Text style={Styles.nameUser}>WellCome Back</Text>
                <View>
                    {/* <Image source={require('./src/assets/images/pornhub.png')} style={{width: 200, height: 200}}/> */}
                    <Image style={Styles.imageLogo} source={require('../src/assets/images/pornhub.png')} />
                </View>
                <View style={Styles.groupInfoLogin}>
                    <View style={Styles.containerIconGroupInfo}>
                        <IconMaterialCommunityIcons style={Styles.icons} name="shield-account-outline" color="#fff" size={20} />
                    </View>
                    <TextInput style={Styles.inputs} placeholder="User" placeholderTextColor="#fff" />
                </View>
                <View style={Styles.groupInfoLogin}>
                    <View style={Styles.containerIconGroupInfo}>
                        <IconFoundation style={Styles.icons} name="key" color="#fff" size={20} />
                    </View>
                    <TextInput style={Styles.inputs} placeholder="Password" placeholderTextColor="#fff" />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Home")
                    }} style={Styles.actionsTouchableOpacity}>
                    <View style={Styles.buttonLogin}>
                        <Text style={Styles.titleButtonLogin}>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
