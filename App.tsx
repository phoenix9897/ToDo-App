import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/Components/ToDoCard/Header/Header.tsx';
import { Button } from 'react-native-paper';
import ButtomCard from "./Components/ToDoCard/Bottom";
import ToDoCard  from "./Components/ToDoCard/Body";
const Router = () => {

    const [counter,setCounter]=useState(0);
    const [list,setList]=useState([]);
    const [mydata,setValue] = useState("")
    function UpdateCounter (){
        setCounter(counter+1);
        const deger =
            {
                id:counter,
                title:mydata,
                isDeleted:false
            }
        setList([...list,deger])
        console.log(deger)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header setCounter={counter}/>
            <FlatList
                keyExtractor={item =>item.id}
                data={list}
                renderItem={(item) => <ToDoCard setTodo={item}/>}
            />
            <ButtomCard setUpdate={UpdateCounter} text={mydata} settext={setValue}/>
        </SafeAreaView>
    );
};

export default Router;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#102027',
    },

});