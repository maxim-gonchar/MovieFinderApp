import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ChooseMovie } from './ChooseMovie';
import { ChooseMovieList } from './ChooseMovieList';
import { fetchChooseMovies } from '../../Data/DATA';
import { useDispatch } from 'react-redux';

export const Choose = () => {
    const KEY = "api_key=4025ed37e3e09fa8c866a4130596a09a";
    const searchMovie = "https://api.themoviedb.org/3/search/movie?" + KEY + "&query=";
    const dispatch = useDispatch();
    const [text, setText] = useState("")
    const fetchData = (link) => {
        if (text.trim()) {
            return dispatch(fetchChooseMovies(link))
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Find Movies, TV series, and more...</Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <TextInput style={styles.textInput} placeholder="Search..." onChangeText={text => setText(text)} onSubmitEditing={() => fetchData(searchMovie + text)} value={text} />
                    {/* <SimpleLineIcons name="magnifier" size={24} color="black" /> */}
                </View>
                <ChooseMovie />
            </View>
            <ChooseMovieList />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        flex: 1
    },
    text: {
        fontSize: 24,
        color: "white"
    },
    textContainer: {
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 30,
    },
    imageContainer: {
        marginBottom: 30,
    },
    textInput: {
        backgroundColor: "#211F30",
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        color: "white"
    },
})