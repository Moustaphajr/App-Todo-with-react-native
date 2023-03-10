import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function TodoItem(props){

            return (

                <TouchableOpacity onPress={()=>props.pressHandler(props.item.key)}>
                    <Text style={styles.item }>{props.item.text}</Text>
                </TouchableOpacity>
            )


}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }

})