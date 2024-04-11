import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeperator from '../components/ListItemSeperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages =[
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/MonaLisa.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/MonaLisa.jpg")
    },
]

export default function MessageScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    

    const handleDelete = (message) => {
        //Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

  return (
    <Screen>

    <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
        <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image} 
        onPress={() => console.log("message homo", item)}
        renderRightActions={ () => 
        <ListItemDeleteAction onPress={ () => handleDelete(item)}/>}
        /> 
        } 
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/MonaLisa.jpg"),
            },
          ])
        }}
    />
    </Screen>
    
  )
}