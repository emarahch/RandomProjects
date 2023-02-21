//https://blog.logrocket.com/create-radio-buttons-react-native/
import React from 'react';
import { useState } from "react";
import { View, Text, Pressable,Image,StyleSheet } from 'react-native';

 function RadioButton({ data, onSelect }) {
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


export default function ActualRadio(){
  const flowData = [
    { value: 'Light' },
    { value: 'Medium' },
    { value: 'Heavy' },
  ];

  const moodData = [
    { value: 'Calm' },
    { value: 'Happy' },
    { value: 'Sad' },
    { value: 'Angry' },
    { value: 'Excited' },
    { value: 'Mood Swings' },
    { value: 'Anxious' },
    { value: 'Indifferent' },
    { value: 'Irrtiable' },
  ];


  const dischargeData = [
    { value: 'None' },
    { value: 'Sticky' },
    { value: 'Eggwhite' },
    { value: 'Atypical' },
    
  ];

  const sexData = [
    { value: 'None' },
    { value: 'Protected' },
    { value: 'Unprotected' },
    { value: 'High sex drive' },
    { value: 'Low sex drive' },
    { value: 'Withdrawl' },
    { value: 'Masturbation' },
    { value: 'Painful' },
    
  ];

  const painData = [
    { value: 'None' },
    { value: 'Period Cramps' },
    { value: 'Ovulation' },
    { value: ' Breast Tenderness' },
    { value: 'Headache' },
    { value: 'Migraine' },
    { value: 'Joint' },
    { value: 'Back' },
    
  ];

  const otherData = [
    { value: 'Acne' },
  
  ];

return(
  <View>
<Text> Flow </Text>
<RadioButton data={flowData} />

<Text> Mood </Text>
<RadioButton data={moodData} />


<Text>  Discharge </Text>
<RadioButton data={dischargeData} />

<Text> Sex </Text>
<RadioButton data={sexData} />

<Text> Pain </Text>
<RadioButton data={painData} />

<Text> Other </Text>
<RadioButton data={otherData} />
</View>
)

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#eaeaea',
  },
  
});