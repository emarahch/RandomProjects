

import React from 'react';
import ActualRadio from './RadioButton';
import { useState } from "react";
import { View, Text, Pressable,Image,StyleSheet ,Modal, ScrollView,TextInput,Button} from 'react-native';


export default function SympModal(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
<View>
 <Modal
 animationType="slide"
 transparent={true}
 visible={modalVisible}
 onRequestClose={() => {
   setModalVisible(!modalVisible);
 }}>
   
 <View style={styles.centeredView}>
   <View style={styles.modalView}>
   <Pressable
       style={[styles.button, styles.buttonClose]}
       onPress={() => setModalVisible(!modalVisible)}>
       <Text style={styles.textStyle}>Hide Modal</Text>
     </Pressable>
     {/* <Text style={styles.modalText}>{currentDate}</Text> */}

     <ScrollView >
     <ActualRadio/>


     <TextInput 
       style={{height:45}}
       placeholder="Anything else?"
       />

 
        </ScrollView>

     
   </View>
 </View>

</Modal>
<Button
    title="Log"
    color="#f194ff"
    onPress={() => setModalVisible(true)}
    />
</View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 8,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  