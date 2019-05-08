import React from 'react';
import {Button,View,StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';
//import Inputs from './input.js'





export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign in',
    };
  
    render() {
      return (
        <View style = {styles.container}>   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this._signInAsync()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Button title="SignUp" onPress={this._signUpAsync} />         
            </View>
      );
    }
  
    _signInAsync = async () => {
      this.props.navigation.navigate("Main");
    
    };

    _signUpAsync = async () => {
        this.props.navigation.navigate("SignUp");
      
      };
  }

  const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })