import React, { Component } from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import Aux from "../../hoc/aux";
import axios from "axios";

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
    },
    exists: null
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
  signUpSubmit = async () => {
    console.log("Getting ready to make request");
    console.log(this.state.signUp);
    await axios
      .post(`http://localhost:3000/users`, {
        username: "eric",
        password: "password",
        fname: "fname",
        lname: "lname",
        email: "email",
        phoneNumber: 1234,
        picture: ""
      })
      .then(response => response.data)
      .then(res => {
        this.setState({ exists: res.exists });
      });
    console.log(this.state.exists);
    // console.log(this.state.signUp);
    //   axios.post('')
  };

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
