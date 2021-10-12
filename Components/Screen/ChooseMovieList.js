import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const ChooseMovieList = () => {
    const data = useSelector(state => state.chooseMovies);
    console.log(data)
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{
                flex: 1,
                justifyContent: "space-around"
            }}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate("MovieScreen", { photo: imageUrl + item.poster_path, title: item.title, overview: item.overview, date: item.release_date })}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUrl + item.poster_path }}
                    />
                    <View style={{ width: 160, justifyContent: "center", marginBottom: 5 }}>
                        <Text style={styles.text}>{item.title}({item.release_date.slice(0, 4)})</Text>
                    </View>
                </TouchableOpacity >
            )
            }
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 220,
        borderRadius: 20,
        marginBottom: 10,

    },
    text: {
        fontSize: 14,
        color: "white",
    },
    imageContainer: {
        marginHorizontal: 10,
        marginBottom: 10,
    }
})