import React from 'react';
import {Button,View,StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';




export default class SignUpScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign up',
    };
  
    render() {
      return (
        <View style = {styles.container}>   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "ID"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
               
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
                  () => this._signUpAsync()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>        
            </View>
      );
    }
  
    _signUpAsync = async () => {
      this.props.navigation.navigate("Main");
    
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
  