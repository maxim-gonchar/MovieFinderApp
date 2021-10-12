import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchChooseMovies } from '../../Data/DATA';

export const ChooseMovie = () => {
    const KEY = "api_key=4025ed37e3e09fa8c866a4130596a09a";
    const BASE_URL = "https://api.themoviedb.org/3"
    const KidsMovies = BASE_URL + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&" + KEY;
    const Drama = BASE_URL + "/discover/movie?with_genres=18&primary_release_year=2020&" + KEY;
    const ratedR = BASE_URL + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" + KEY;

    const dispatch = useDispatch();
    const fetchData = (link) => {
        return dispatch(fetchChooseMovies(link));
    }
    // const fetch = useMemo((link) => {
    //     return fetchData(link)
    // }, [link])

    return (
        <View style={styles.genreContainer}>
            <TouchableOpacity onPress={() => fetchData(KidsMovies)}>
                <Text style={styles.movieGenre}>Kids movies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fetchData(Drama)}>
                <Text style={styles.movieGenre}>Drama</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fetchData(ratedR)}>
                <Text style={styles.movieGenre}>Rated R</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    genreContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    movieGenre: {
        fontSize: 18,
        color: "white"
    }
})