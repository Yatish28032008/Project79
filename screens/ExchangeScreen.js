import React, {Component} from 'react'
import {Text, TouchableOpacity, TextInput, View, Alert, FlatList} from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            itemName:'',
            itemDescription:''
        }
    }

    addItem=(itemName, itemDescription)=>{
        var userName = this.setState.userName
        db.collection('itemList').add({
            "username":userName,
            "item_name":itemName,
           "item_description":itemDescription 
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress: () => {
this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
    }

renderItem = ( {item, i})=>{
    console.log(item.item_name);
    return (
        <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.itemDescription}
        rightElement={
            <TouchableOpacity>
                <Text>Exchange</Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
}

    render(){
        return(
            <View>
                    <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.allRequests}
    renderItem={this.renderItem}
    />
                <TextInput
                placeholder="Item Name"
                onChangeText={(text)=>{
                    itemName:text
                }}
                />
                <TextInput
                placeholder="Item Description"
                onChangeText={(text)=>{
                    itemDescription:text
                }}
                />
                <TouchableOpacity
                onPress={()=>{
                    this.addItem()
                }}
                >
                    Add Item 
                </TouchableOpacity>
            </View>
        )
    }
}