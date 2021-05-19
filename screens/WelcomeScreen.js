import react, { Component } from 'React'
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, Modal} from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailID:'',
            Password:'',
            confirmPassword:'',
            isModalVisible:'false',
            firstName:'',
            lastName:'',
            address:'',
        }
    }

    userSignUp=(username, password) =>{
      if(password !== confirmPassword){
        return Alert.alert("password doesn't match\nCheck your password.")
    }else{
firebase.auth().createUserWithEmailAndPassword(username, password)

.then(()=>{
  db.collection('users').add({
    first_name:this.state.firstName,
    last_name:this.state.lastName,
    contact:this.state.contact,
    email_id:this.state.emailId,
    address:this.state.address
  })
  return Alert.alert("User Added Successfully")
})


.catch(function(error){
  var errorCode=error.code;
  var errorMessage = error.message;
  return Alert.alert(errorMessage)
});

    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        this.props.navigation.navigate('DonateBooks')
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
  }}
    
    showModal=()=>{
   <Modal
   visible={this.state.isModalVisible}
   >
     <View>
       <Text>Registration</Text>
       <TextInput
       placeholder="First Name"
      onChangeText={(text)=>{
        this.setState({
          firstName:text
        })
      }}
       />

       <TextInput
       placeholder="Last Name"
       onChangeText={(text)=>{
         lastName:text
       }}
       />

       <TextInput
       placeholder="address"
       onChangeText={(text)=>{
         address:text
       }}
       />

       <TextInput
       placeholder="contact"
       onChangeText={(text)=>{
         contact:text
       }}
       />

<TextInput
       placeholder="Email"
       keyboardType="email-address"
       onChangeText={(text)=>{
         emailID:text
       }}
       />

<TextInput
       placeholder="Password"
       secureTextEntry={true}
       onChangeText={(text)=>{
         password:text
       }}
       />

<TextInput
       placeholder="Confirm Password"
       secureTextEntry={true}
       onChangeText={(text)=>{
         confirmPassword:text
       }}
       />

       <TouchableOpacity
        onPress={()=>
          this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
        }>
         <Text>Register</Text>
       </TouchableOpacity>

     </View>
   </Modal>
    }

    render(){
        return(
<View>

<TextInput
 placeholder="abc@example.com"
 keyboardType ='email-address'
 onChangeText={(text)=>{
   this.setState({
     emailId: text
   })
 }}
/>

<TextInput
 placeholder ={"Password"}
 secureTextEntry = {true}
 onChangeText={(text)=>{
   this.setState({
     password: text
   })
 }}
/>

<TouchableOpacity style = {styles.loginButton}>
  <Text>Login</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>{
  this.showModal()
}}
>
  <Text>Sign Up</Text>
</TouchableOpacity>

</View>
        )
    }
}

const styles = StyleSheet.create({
})