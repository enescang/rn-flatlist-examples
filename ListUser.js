import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default class App extends React.Component {
  state = {
    data: [
      {
        name: "Ali",
        lastName: " Bakır",
        age: 20,
        img: "https://randomuser.me/api/portraits/lego/8.jpg",
      },
      {
        name: "Ahmet",
        lastName: " Bakır",
        age: 22,
        img: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
      {
        name: "Ayşe",
        lastName: " Bakır",
        age: 20,
        img: "https://randomuser.me/api/portraits/lego/1.jpg",
      },
    ],
  };

  renderUser = ({ item, index }) => {
    return (
      <View>
        <Text>Name: {item.name}</Text>
        <Text>Last Name: {item.lastName}</Text>
        <Text>Age: {item.age}</Text>
        <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Users</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderUser}
          numColumns={2}
        />
      </View>
    );
  }
}
