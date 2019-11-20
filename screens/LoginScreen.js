import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
const log = require("./deneme.json")
//import Inputs from './input.js'
var flag = 0


export default class LoginScreen extends React.Component {

  state = {
    username: "",
    password: ""
  }
  static navigationOptions = {
    title: 'Sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Id"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput secureTextEntry={true} style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this._signInAsync()
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Button title="SignUp" onPress={this._signUpAsync} />
      </View>
    );
  }

  handleEmail = async (value) => {
    this.setState({ username: value })
  }

  handlePassword = async (value) => {
    this.setState({ password: value })
  }
  async checkForSignIn() {
    try {
      let response = await fetch('https://hastanerandevusystem20190524120752.azurewebsites.net/login/control', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "TC": this.state.username,
          "SIFRE": this.state.password
        }),
      });
      console.log(response)
      var statusCode = JSON.parse(response._bodyInit);
      if (statusCode["StatusCode"] === 404) {
        this.props.navigation.navigate("Main");

      }
      else {
        this.props.navigation.navigate("Main");
      }

    } catch (error) {
      console.error(error);
    }
  }
  _signInAsync = async () => {
    var params = {
      username: this.state.username,
      password: this.state.password

    }

    log.users.forEach(element => {
      if (element.title === params.username && element.password === params.password) {
        flag = 1;
        if (element.id === "1") {
          this.props.navigation.navigate("Main");
        }

        if (element.id === "0") {
          this.props.navigation.navigate("Admin");
        }

      }
    });
    if (flag === 0)
      alert("Wrong information");




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
  submitButtonText: {
    color: 'white'
  }
})