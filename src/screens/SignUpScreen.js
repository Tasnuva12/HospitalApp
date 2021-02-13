import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import {Input,Button,Card} from "react-native-elements";
import {FontAwesome,Feather,AntDesign,  Ionicons} from '@expo/vector-icons';



import  *as firebase  from "firebase";
import 'firebase/firestore';


const SignUpScreen= (props)=>{


  const [Name, setName] = useState("");
 
 
  const [Email, setEmail] = useState("");
 
  const [Password, setPassword] = useState("");
    return(
        <View style={styles.viewStyle}>
            <Card>
            <Card.Title>Welcome to AuthApp!</Card.Title>
            <Card.Divider />
            <Input 
            leftIcon={<Ionicons name="ios-person" size={24} color="black"/>}
            placeholder='Name'
            onChangeText={function (currentInput) {
                setName(currentInput);
              }}
            
            /> 

          

            

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
            

              <Button
              icon={<AntDesign name="login" size={24} color="white" />}
              title="Sign Up!"
              type="solid"
              onPress={()=>{
                  if(Name && Email  && Password){
                    
                    firbase
                    .auth()
                    .createUserWithEmailAndPassword(Email, Password)
                    .then((userCreds) => {
                      firebase
                          .database()
                          .ref()
                          .child("users/")
                          
                          .child(userCreds.user.uid)
                          .set({
                              name:Name,
                              email:Email,
                          })
                          .then(()=>{

                            alert("Account Created Successfully!");
                            console.log(userCreds.user);
                            props.navigation.navigate("SignIn");

                          })  
                          .catch((error)=>{
                              alert(error);
                          });
                    })
                    .catch((error) => {
                      var errorCode = error.code;
                      var errorMessage = error.message;
                    
                    });
                  

                  }
                  else {
                      alert("Field can not be empty!");
                  }

              


            }}
                 
              />
              <Button
              type="outline"
              icon={<AntDesign name="user" size={24} color="dodgerblue" />}
              title="  Already have an account?"
              onPress={function () {
                props.navigation.navigate("SignIn");
              }}
            />



            </Card>
            </View>
    )
}
    


        const styles= StyleSheet.create({
            viewStyle: {
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#4bacb8",
              },

});
export default SignUpScreen ;