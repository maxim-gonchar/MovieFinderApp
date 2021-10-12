import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchMovies } from "../../Data/DATA"
import { useNavigation } from '@react-navigation/native';

export const MovieList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, [])
    const data = useSelector(state => state.movies);
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate("MovieScreen", { photo: imageUrl + item.poster_path, title: item.title, overview: item.overview, date: item.release_date })}>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl + item.poster_path }}
                        />
                    </TouchableOpacity >
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        // padding: 20,
        // marginHorizontal: 10,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 30,
        marginHorizontal: 10,
    },
})