import React  from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';


import PatientScreen from './src/screens/PatientScreen';
import AcceptedAppointmentScreen from './src/screens/AcceptedAppointmentScreen';
import RejectedAppointmentScreen from './src/screens/RejectedAppointmentScreen';
import  ServiceListPatient from './src/screens/ServiceListPatient';


import  AdminScreen  from './src/screens/AdminScreen';
import SeriveListAdmin from './src/screens/ServiceListAdmin';
import AppointmentRequestList from './src/screens/AppointmentRequestList';




import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import  * as firebase  from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyCGcCoVibTVHT_fY_PHJ-VOzEkd7JMIWTc",
  authDomain: "hospital-ffff3.firebaseapp.com",
  databaseURL: "https://hospital-ffff3-default-rtdb.firebaseio.com",
  projectId: "hospital-ffff3",
  storageBucket: "hospital-ffff3.appspot.com",
  messagingSenderId: "70759307922",
  appId: "1:70759307922:web:a605fb5322e3869471244b"
};
if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
}



const HomeStack =createStackNavigator();

const AuthStack =createStackNavigator();


const HomeStackScreen=()=>{
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name ='Home' component={HomeScreen}/>

      <HomeStack.Screen name='Patient' component ={PatientScreen}/>
      <HomeStack.Screen name ='RejectedAppointment' component={RejectedAppointmentScreen}/>
      <HomeStack.Screen name ='AcceptedAppointment' component={AcceptedAppointmentScreen}/>
      <HomeStack.Screen name ='ServiceListPatient' component={ServiceListPatient}/>
      
      <HomeStack.Screen name ='Admin' component={AdminScreen}/>
      <HomeStack.Screen name ='ServiceListAdmin' component={ServiceListAdmin}/>
      <HomeStack.Screen name ='AppointmentRequestList' component={AppointmentRequestList}/>
      
    


    </HomeStack.Navigator>
  );

   
};


const AuthStackScreen=()=>{
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen name ='SignIn' component={SignInScreen} options={{ headerShown: false }}/>
      <AuthStack.Screen name ='SignUp' component={SignUpScreen} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );

   
};


function App(){
  return (
   <AuthProvider>
     <AuthContext.Consumer>
     {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
            
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
