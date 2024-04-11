import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Screen from "./app/components/Screen"



const Link = () => {
  const navigation = useNavigation()
  
  return (
  <Button
  title="Click"
  onPress={() => navigation.navigate("TweetDetails") }/>
)}

const Stack = createStackNavigator();

const Tweets = ( {navigation} ) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
  title="Click"
  onPress={() => navigation.navigate("TweetDetails", { id: 2}) }/>
    
  </Screen>
);

const TweetDetails = ( { route } ) => (
  
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
);

const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: "dodgerblue"},
    headerTintColor: "white",
  }}>
    <Stack.Screen 
    name="Tweets" 
    options={{
      headerStyle: {backgroundColor: "tomato"},
      headerTintColor: "white",
      headerShown: false,
    }}
    component={Tweets} />
    <Stack.Screen 
    name="TweetDetails" 
    options={( {route} ) =>({ title: route.params.id})}
    component={TweetDetails} />
  </Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
