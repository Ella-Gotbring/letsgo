import React, { useEffect } from 'react';
import { getMovies } from '../redux/actions';
import { View, TouchableOpacity, Image, FlatList, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

const Movies = () => {
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    const { movies } = useSelector(state => state.moviesReducer);

    useEffect(() => {
        fetchMovies();
    }, []);
    return ( <
        View style = { styles.container } >
        <
        Text style = {
            { fontSize: 25 } } > Top Rated Movies on TMDB < /Text> <
        View style = {
            { flex: 1 } } >
        <
        FlatList data = { movies }
        keyExtractor = { item => item.id.toString() }
        renderItem = {
            ({ item }) => {
                const IMAGE_URL =
                    'https://image.tmdb.org/t/p/w185' + item.poster_path;
                return ( <
                    View style = {
                        { marginVertical: 12 } } >
                    <
                    View style = {
                        { flexDirection: 'row', flex: 1 } } >
                    <
                    Image source = {
                        {
                            uri: IMAGE_URL,
                        }
                    }
                    resizeMode = "cover"
                    style = {
                        { width: 100, height: 150, borderRadius: 8 } }
                    /> <
                    View style = {
                        { flex: 1, marginLeft: 15 } } >
                    <
                    View >
                    <
                    Text style = {
                        { fontSize: 22, paddingRight: 14 } } > { item.title } <
                    /Text> <
                    /View> <
                    View style = {
                        {
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center',
                        }
                    } >
                    <
                    /View> <
                    /View> <
                    /View> <
                    /View>
                );
            }
        }
        showsVerticalScrollIndicator = { false }
        /> <
        /View> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Movies;