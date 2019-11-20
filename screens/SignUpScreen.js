import React from 'react';
import { Modal, Button, TouchableHighlight, View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';




export default class SignUpScreen extends React.Component {

  state = {
   isModalVisible: false,
  }
  static navigationOptions = {
    title: 'Please sign up',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="ID"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Full Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="date of birth"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="place of birth"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

   

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this._signUpAsync()
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signUpAsync = async () => {
    this.props.navigation.navigate("Main");

    _maybeRenderModal = () => {
      if (!this.state.modalIsVisible) {
        return null;
      }
  
      const { modalAnimatedValue } = this.state;
      const opacity = modalAnimatedValue;
      const translateY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
      });
  
      return (
        <View
          style={StyleSheet.absoluteFill}
          pointerEvents={this.state.modalIsVisible ? 'auto' : 'none'}>
          <TouchableWithoutFeedback onPress={this._handlePressDone}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              transform: [{ translateY }],
            }}>
            <View style={styles.toolbar}>
              <View style={styles.toolbarRight}>
                <Button title="Done" onPress={this._handlePressDone} />
              </View>
            </View>
            <Picker
              style={{ width: WindowWidth, backgroundColor: '#e1e1e1' }}
              selectedValue={this.state.appointment.hospital}
              onValueChange={this._writeMe}>
              <Picker.Item label="Denizli" value="dnz" />
              <Picker.Item label="Izmir" value="izm" />
              <Picker.Item label="Manisa" value="mns" />
            </Picker>
          </Animated.View>
        </View>
      );
    };

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
