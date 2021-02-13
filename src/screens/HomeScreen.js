import React,{useState} from 'react';
import { Button } from 'react-native';
import {View,StyleSheet,Text} from 'react-native';
import { AuthContext } from "../providers/AuthProvider";
import  * as firebase  from "firebase";
import 'firebase/firestore';


const HomeScreen= (props)=>{
    return (
        <AuthContext.Consumer>
        {(auth)=>(<View>
            <Text style={{fontSize:30}}>
                Welcome {auth.CurrentUser.name}!
            </Text>
            <Button
            type="outline"
            title="Use as Patient"
            onPress={function () {
              props.navigation.navigate("Patient");
            }}
            
            
            />  

           <Button
            type="outline"
            title="Use as Admin"
            onPress={function () {
              props.navigation.navigate("Admin");
            }}
            
            
            />

            
            


            <Button
            type='outline'
            title='Log Out'
            onPress={()=>{

            
                firebase
                .auth()
                .signOut()
                .then(() => {
                    auth.setIsLoggedIn(false);
                    auth.setCurrentUser({}); 
                   
                  })
                  .catch((error) => {
                      alert(error);
                   
                  });

                }}

           
        
            />
        </View>)}
        </AuthContext.Consumer>
    )



}
const styles =StyleSheet.create({
    textStyle:{
        fontSize:30,
        color:"blue",

    },

});
export default HomeScreen;