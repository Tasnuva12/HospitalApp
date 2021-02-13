import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import {FontAwesome,Feather,AntDesign} from '@expo/vector-icons';

import { AuthContext } from "../providers/AuthProvider";
import  *as firebase  from "firebase";
import 'firebase/firestore';

const SignInScreen= (props)=>{
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    
    return(
        <AuthContext.Consumer>
        {(auth)=>( <View style={styles.viewStyle}>
            <Card>
            <Card.Title>Welcome to Hospital App!</Card.Title>
            <Card.Divider />
            <Input 
            leftIcon={<FontAwesome name="envelope" size={24} color="black"/>}
            placeholder='E-mail Address'
            onChangeText={function (currentInput) {
                setEmail(currentInput);
              }}
            
            /> 

             <Input
              placeholder="Password"
              leftIcon={<Feather name="key" size={24} color="black" />}
              secureTextEntry={true}
              onChangeText={function (currentInput) {
                setPassword(currentInput);
              }}
             
            />
            <Input
              placeholder="Role"
              lleftIcon={<Ionicons name="ios-person" size={24} color="black"/>}
              secureTextEntry={true}
              onChangeText={function (currentInput) {
                setRole(currentInput);
              }}
            />

              <Button
              icon={<AntDesign name="login" size={24} color="white" />}
              
              title="Sign In!"
              type="solid"
              onPress={()=>{
                  firebase
                  .auth()
                  .signInWithEmailAndPassword(Email,Password)
                  .then((userCreds)=>{
                      auth.setIsLoggedIn(true);
                      auth.setCurrentUser(userCreds.user);

                  })
                  .catch((error)=>{
                      alert(error);
                  });
              }}

              
              />
              <Button
              type="outline"
              icon={<AntDesign name="user" size={24} color="dodgerblue" />}
              title="  Don't have an account?"
              onPress={function () {
                 props.navigation.navigate("SignUp");
              }}
            />



            </Card>
        </View>)}
        </AuthContext.Consumer>
    )
}
    


const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#4bacb8",
    },
  });
export default SignInScreen ;