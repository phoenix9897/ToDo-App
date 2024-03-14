import React from "react";
import {View, Text, TouchableOpacity ,TextInput} from "react-native";
import styles from './ButtomCard.Style.tsx';

const ToDoButtomCard = (props: any) => {
    return (

        <View style={styles.container}>
            <TextInput style={props.text.length >0 ? styles.txtInput1 :styles.txtInput}  value={props.text} onChangeText={props.settext} placeholder='Yapılacaklar..'/>
            <TouchableOpacity style={props.text.length>0 ? styles.btn1 : styles.btn}  onPress={props.setUpdate}><Text>KAYDET</Text></TouchableOpacity>
        </View>
    );
};

export default ToDoButtomCard;