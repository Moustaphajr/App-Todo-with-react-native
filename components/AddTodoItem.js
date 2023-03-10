import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
 export default function AddTodo(props){
    const [text,setText]=useState()
 
    const ChangeHandler=(value)=>{
        setText(value)
    }

        return (
            <View>
                <TextInput
                    placeholder="new todo..."
                    onChangeText={ChangeHandler}
                    style={styles.input}
                />
                <Button title="Add to do" color="coral"   onPress={()=>props.SubmitHandler(text)}/>
            </View>
        )


 }

 const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
 })