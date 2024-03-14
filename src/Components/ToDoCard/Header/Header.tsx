import React from 'react';
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from './Header.style.tsx';

const Header = (props: any) => {
    return (

        <View style={styles.container}>
            <Text style={styles.intxt}>Yapılacaklar</Text>
            <Text style={styles.counter} >{props.setCounter}</Text>
        </View>
    );
};

export default Header;