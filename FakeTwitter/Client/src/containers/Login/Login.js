import React, { Component } from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import Aux from "../../hoc/aux";
import axios from 'axios';

class Login extends Component {
  state = {
    needNewAccount: false,
    key: 1,
    signIn: {
      emailusername: null,
      password: null
    },
    signUp: {
      fname: null,
      lname: null,
      username: null,
      email: null,
      password: null,
      retypePassword: null
    }
  };

  signInHandler = event => {
    //   console.log(event.target.name);
    // this.setState(
    //     {username: event.target.value}
    //    )
    const st = this.state.signIn;
    st[event.target.name] = event.target.value;
    this.setState({ signIn: st });
  };
  signInSubmit = () => {
    if (
      this.state.signIn.emailusername === null ||
      this.state.signIn.password === null
    ) {
      alert("cannot sign in, this is a prememptive measure, will fix later on");
    } else return;
    //perform axios call here
  };

  signUpHandler = event => {
    const st = this.state.signUp;
    st[event.target.name] = event.target.value;
    this.setState({ signUp: st });
  };
  async signUpSubmit(){
    console.log('Getting ready to make request');
    await axios
    .post(`http://localhost:5000/users`, this.state.signUp)
    .then(response => response.data)
    .then(res => {
      this.setState({ exist: res.exists });
    });
  console.log(this.state.exist);
      // console.log(this.state.signUp);
    //   axios.post('')
       
  }

  render() {
    return (
      <Aux>
        <NavBar />
        <LoginForm
          signInHandler={this.signInHandler}
          signInSubmit={this.signInSubmit}
          signUpHandler={this.signUpHandler}
          signUpSubmit={this.signUpSubmit}
        />
      </Aux>
    );
  }
}

export default Login;
