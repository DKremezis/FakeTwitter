import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    exist: null
  };
  async componentDidMount() {
    console.log('1');
    await axios
      .post(`http://localhost:5000/users`, {
        username: 'eric',
        password: 'password',
        fname: 'fname',
        lname: 'lname',
        email: 'email',
        phoneNumber: 1234,
        picture: ''
      })
      .then(response => response.data)
      .then(res => {
        this.setState({ exist: res.exists });
      });
    console.log(this.state.exist);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
