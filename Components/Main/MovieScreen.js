import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


export const MovieScreen = ({ route }) => {
    const photo = route.params.photo
    const title = route.params.title
    const synopsis = route.params.overview
    const date = route.params.date
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.photo}>
                <Image
                    source={{ uri: photo }}
                    style={styles.photo}
                />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontSize: 18, color: "white" }}>Release date</Text>
                    <Text style={{ fontSize: 14, color: "#BCBCBC" }}>{date}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, color: "white", marginBottom: 10, marginTop: 15 }}>Synopsis</Text>
                    <Text style={{ fontSize: 14, color: "#BCBCBC" }}>{synopsis}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        flex: 1,
    },
    photo: {
        width: "100%",
        height: 300
    },
    text: {
        fontSize: 24,
        color: "white"
    },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "black",
        opacity: 0.6,
        position: "absolute",
        left: 10,
        top: 10,
        zIndex: 100,
        justifyContent: "center",
        paddingLeft: 10
    },

    textContainer: {
        paddingHorizontal: 20,
    },
    title: {
        borderBottomWidth: 1,
        borderBottomColor: "white",
        height: 80,
        justifyContent: "center"
    },
    date: {
        borderBottomWidth: 1,
        borderBottomColor: "white",
        height: 80,
        justifyContent: "space-evenly"
    }
})
