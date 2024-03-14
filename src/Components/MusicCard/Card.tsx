import {View, Text, Image, TouchableOpacity, Alert} from "react-native";
import React from "react";
import styles from "../MusicCard/Card.Styles.tsx";

const SongCard = (props: any) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.song.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut && <View style={styles.sold_out_container}>
                        <Text style={styles.sold_out_text}>Tükendi</Text>
                    </View>
                    }
                </View>
            </View>
        </View>
    );
};

export default SongCard;