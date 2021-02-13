import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import {FontAwesome,Feather,AntDesign} from '@expo/vector-icons';

import { AuthContext } from "../providers/AuthProvider";
import  *as firebase  from "firebase";
import 'firebase/firestore';

const AdminScreen =(props)=>{
    return(
        <Card>
            <Card.Title>Welcome Admin!</Card.Title>
            <Button
            type="outline"
            title="Service List"
            onPress={function () {
              props.navigation.navigate("ServiceListAdmin");
            }}
            />
            <Button
            type="outline"
            title="Appointment Request  List"
            onPress={function () {
              props.navigation.navigate("AppointmentRequestList");
            }}
            />

        </Card>
    )
    
}

export  default  AdminScreen;