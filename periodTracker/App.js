
// https://reactnavigation.org/docs/tab-based-navigation/
import RadioButton from './components/RadioButton';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Modal,Pressable,TextInput,ScrollView,SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen( {navigation}) {
    const [currentDate, setCurrentDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    // const [text, setText] = useState('');

    useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1; 
      var year = new Date().getFullYear(); 
      setCurrentDate(
        month + '/' + date + '/' + year 
      );
    }, []);
    
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


    
    
    
      return (
        <View style={styles.container}>



{/* Modal(start) is from react dev website */}
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
            <Text style={styles.modalText}>{currentDate}</Text>

            <ScrollView >
            

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

      {/* <Text> Sleep </Text>
      <RadioButton data={flowData} /> */}


            <TextInput 
              style={{height:45}}
              placeholder="Anything else?"
              />
               </ScrollView>

            
          </View>
        </View>
       
      </Modal>

          <Text>{currentDate}</Text>
          <Button
    title="Log"
    color="#f194ff"
    onPress={() => setModalVisible(true)}
    />
          <StatusBar style="auto" />

        </View>

  );
}


function InsightsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Insights!</Text>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    
  </NavigationContainer>
  );
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
