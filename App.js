import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import { useState } from "react";
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/AddTodoItem';

export default function App() {
  const [todos,setTodos]=useState([
    {text:"buy coffe",key:"1"},
    {text:"create an app",key:"2"},
    {text:"play on the switch",key:"3"},
  ])

  const pressHandler=(key)=>{
      setTodos((prevTodos)=>{
          return prevTodos.filter(todo=>todo.key!=key)
      })
  }

  const SubmitHandler=(text)=>{
      setTodos((PrevTodo)=>{
          return [
            {text:text,key:Math.random().toString()},
            ...PrevTodo
          ]
      })
  }

       

  return (
    <View style={styles.container}>
        {<Header/>}
        <View style={styles.content}>
          {<AddTodo SubmitHandler={SubmitHandler}/>}
        
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({item})=>(
                       <TodoItem item={item} pressHandler={pressHandler}
                       />
                    )}

                />
              
            </View>
        </View>

       
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
    paddingHorizontal:20,
    paddingTop:40
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
  

 
});
