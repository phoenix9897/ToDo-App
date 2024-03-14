import {StyleSheet} from 'react-native';


export default StyleSheet.create(
    {
        container: {
            padding: 10,
            flexDirection: 'row',
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50,
        },
        inner_container: {
            padding: 10,
            flex: 1,
        },
        title: {
            fontSize: 27
        },
        info_container: {
                flex:1,
            flexDirection: "row",
        },
        year: {
            marginLeft: 10,
            fontWeight: "bold",
            color: "grey",
        },
        sold_out_container: {
            borderWidth: 1,
            borderColor: "red",
            padding: 5,
            borderRadius: 5,
        },

        sold_out_text: {
            color: "red",
        },

        content_container: {
            flexDirection: 'row',
        }


    }
);