
// https://reactnavigation.org/docs/tab-based-navigation/


import SympModal from './components/sympModal';
import Calendar from './components/calendar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Modal,Pressable,TextInput,ScrollView,SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen( {navigation}) {
    const [currentDate, setCurrentDate] = useState('');
    // const [modalVisible, setModalVisible] = useState(false);
    // const [text, setText] = useState('');

    useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1; 
      var year = new Date().getFullYear(); 
      setCurrentDate(
        month + '/' + date + '/' + year 
      );
    }, []);
    

      return (
        <View style={styles.container}>


          <Text>{currentDate}</Text>
          <SympModal/>
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

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Calendar/>
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
      <Tab.Screen name="Calendar" component={CalendarScreen} />
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
