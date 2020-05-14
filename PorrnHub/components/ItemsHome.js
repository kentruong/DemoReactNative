import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Styles } from "../src/assets/css";
import Detail from "../screens/Detail";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export default function ItemsHome(props) {
    const image = { uri: props.content.link };
    return (
        <View style={styles.wrapper}>
            <ImageBackground style={styles.ImageBackgrounds} source={image}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Detail")
                    }} style={Styles.actionsTouchableOpacity}>
                    <View style={Styles.buttonLogin}>
                        <Text style={Styles.titleButtonLogin}>Login</Text>
                        
                    </View>
                </TouchableOpacity>
                <IconAntDesign style={styles.icons} name="playcircleo" color="#fff" size={60} />
            </ImageBackground>
            <View style={styles.info}>
                <Text style={styles.names}>{props.content.name}</Text>
                <Text style={styles.time}>{props.content.time}</Text>
                <IconAntDesign style={styles.iconStar} name="star" color="#FF9800" size={18} />
                <IconAntDesign style={styles.iconStar} name="star" color="#FF9800" size={18} />
                <IconAntDesign style={styles.iconStar} name="star" color="#FF9800" size={18} />
                <IconAntDesign style={styles.iconStar} name="staro" color="#fff" size={18} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    info: {
        flexDirection: "row",
        marginTop: 4,
    },
    names: {
        fontSize: 18,
        color: "#FF9800",
    },
    time: {
        color: "#fff",
        fontSize: 16,
        marginTop: 3,
        marginHorizontal: 4,
    },
    ImageBackgrounds: {
        width: "100%",
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStar: {
        marginTop: 3,
    }
});