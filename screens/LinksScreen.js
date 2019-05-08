import React from 'react';
import { Picker, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const aArray = [

]

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Appointments',
  };
  state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
  render() {
    return (
      <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "DokuzEylul" value = "DEU" />
               <Picker.Item label = "EGE" value = "EU" />
               <Picker.Item label = "Ozel" value = "ozel" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
     fontSize: 30,
     alignSelf: 'center',
     color: 'red'
  }
})
