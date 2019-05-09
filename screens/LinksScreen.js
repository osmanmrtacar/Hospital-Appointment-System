import React from 'react';
import { Animated, Button, Dimensions, Picker, Platform, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const { width: WindowWidth } = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    language: 'js',
    modalIsVisible: false,
    modalAnimatedValue: new Animated.Value(0),
    appointment: {
      hospital: 'Select a hospital',
      clinic: '',
      doctor: ''
    }
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      alert(
        'Umm yeah this is meant for iOS, Picker modal looks different on Android. But go for it and try if you want, maybe make your own Snack that gives Android specific styling, that would be neat.'
      );
    }
  }

  _handlePressDone = () => {
    Animated.timing(this.state.modalAnimatedValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ modalIsVisible: false });
    });
  };

  _handlePressOpen = () => {
    if (this.state.modalIsVisible) {
      return;
    }

    this.setState({ modalIsVisible: true }, () => {
      Animated.timing(this.state.modalAnimatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>
          </Text>
          <Button title={this.state.appointment.hospital} onPress={this._handlePressOpen} />
          <Button title="Select a clinic" onPress={this._handlePressOpen} />
          <Button title="Select a doctor" onPress={this._handlePressOpen} />
        </View>
        {this._maybeRenderModal()}
      </View>
    );
  }

  _writeMe = (obj, index) => {
    alert(index);
    let appointment = { ...this.state.appointment };
    appointment.hospital = obj;
    this.setState({ appointment });
  }

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  toolbar: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  toolbarRight: {
    alignSelf: 'flex-end',
  },
});
