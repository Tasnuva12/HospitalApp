import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import {FontAwesome,Feather,AntDesign} from '@expo/vector-icons';

import { AuthContext } from "../providers/AuthProvider";
import  *as firebase  from "firebase";
import 'firebase/firestore';

const SeriveListPatient =(props)=>{
    return(
        <Card>
            <Card.Title>Service List</Card.Title>
        </Card>
    )
    
}

export  default  SeriveListPatient;