import React, {Component} from 'react'
import {Text, TouchableOpacity, TextInput, View} from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    getAllItems =()=>{
        this.requestRef = db.collection("itemList").where("")
        .onSnapshot((snapshot)=>{
          var allDonations = snapshot.docs.map(document => document.data());
          this.setState({
            allDonations : allDonations,
          });
        })
      }
   
      keyExtractor = (item, index) => index.toString()
   
      renderItem = ( {item, i} ) =>(
        <ListItem
          key={i}
          title={item.item_name}
          centreElement={
              <TouchableOpacity 
              onPress={()=>{
                this.sendBook(item)
              }}
              >
                <Text>Send Book</Text>
              </TouchableOpacity>
            }
          bottomDivider
        />
      )
   
}