import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import {FontAwesome,Feather,AntDesign} from '@expo/vector-icons';

import { AuthContext } from "../providers/AuthProvider";
import  *as firebase  from "firebase";
import 'firebase/firestore';

const PatientScreen =(props)=>{
    return(
        <Card>
            <Card.Title>Welcome to the Patient Screen</Card.Title>

            <Button
            type="outline"
            title="Service List"
            onPress={function () {
              props.navigation.navigate("ServiceListPatient");
            }}
            />

           <Button
            type="outline"
            title="Rejected Appointment"
            onPress={function () {
              props.navigation.navigate("RejectedAppointment");
            }}
            />

        </Card>
    )
    
}

export  default  PatientScreen;