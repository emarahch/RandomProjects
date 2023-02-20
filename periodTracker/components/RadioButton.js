//https://blog.logrocket.com/create-radio-buttons-react-native/
import React from 'react';
import { useState } from "react";
import { View, Text, Pressable } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);

  return (
    <View>
      {data.map((item) => {
        return (
        <Pressable onPress={() => setUserOption(item.value)}>
        <Text> {item.value}</Text>
        </Pressable>
      )})}
       <Text> User option: {userOption}</Text>
    </View>
  );
}