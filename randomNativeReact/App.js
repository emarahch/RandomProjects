import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
     
     <Text>You clicked {count} times</Text>
      <StatusBar style="auto" />


      <Button
title="Press me"
color="#f194ff"
onPress={() => setCount(count + 1)}
/>


<TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

<Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>




<Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
  
    </View>
  );
}


const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <NavigationContainer>

<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
