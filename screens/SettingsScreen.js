import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

            <Text style={styles.name}>John Doe </Text>
            <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
            <Text style={styles.userInfo}>Izmir </Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.name}>Last Appointments</Text>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.info}>KBB</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.info}>KBB</Text>
            </View>
          </View>

          <Text style={styles.name}>Current Appointments</Text>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.info}>KBB</Text>
            </View>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/trash/' }} />
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.info}>KBB</Text>
            </View>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/trash/' }} />
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.info}>KBB</Text>
            </View>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/trash/' }} />
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  lastAppointments: {
    fontSize: 16,
    color: "#000000",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
});
