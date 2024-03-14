import React from 'react';
import {TextInput, View, Text} from "react-native";
import styles from '../SearchBar/SearchBar.Style.tsx';

// @ts-ignore
const SearchBar = (props) => {
    return (
        <View>
            <TextInput
                style={styles.container}
                placeholder="Bir sarki arayin"
                onChangeText={props.onSearch}
            />
        </View>

    );
};

export default SearchBar;