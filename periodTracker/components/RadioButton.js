//https://blog.logrocket.com/create-radio-buttons-react-native/
import React from 'react';
import { useState } from "react";
import { View, Text, Pressable,Image,StyleSheet } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
        <Pressable onPress={() => setUserOption(item.value)}>
          <Image
          style={{
            resizeMode: 'cover',
            height: 50,
            width: 50,
          }}
          source={require('../assets/favicon.png')}
        />
        <Text> {item.value}</Text>
        </Pressable>
        
      )})}
       <Text> User option: {userOption}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#eaeaea',
  },
  
});