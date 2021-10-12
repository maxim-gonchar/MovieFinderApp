import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { MovieList } from './MovieList';

export const Main = () => {
  const isFetching = useSelector(state => state.isFetching)

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Stream Everywhere</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://avatars.mds.yandex.net/get-ott/223007/2a00000167652493c916e6a5e7fb94a03a6b/1344x756" }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Trending</Text>
        </View>
      </View>
      <View style={{ padding: 5 }}>
        {/* {isFetching  ? <MovieList /> : <ActivityIndicator />} */}
        <MovieList />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 30,
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
})