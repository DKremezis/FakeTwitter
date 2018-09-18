import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col, Tabs, Tab } from "react-bootstrap";
import Signin from "../LoginForm/Signin/Signin";
import Signup from "../LoginForm/Signup/Signup";

const loginForm = props => {
  //   let form = <Signin />;
  //   if (props.needsNewAccount) {
  //     form = <Signup />;
  //   }
  return (
    <Grid>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron>
            <ControlledTabs
              signInHandler={props.signInHandler}
              signInSubmit={props.signInSubmit}
              signUpHandler={props.signUpHandler}
              signUpSubmit={props.signUpSubmit}
            />
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Row>
    </Grid>
  );
};

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="Sign In">
          <Signin
            signInHandler={this.props.signInHandler}
            signInSubmit={this.props.signInSubmit}
          />
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <Signup
            signUpHandler={this.props.signUpHandler}
            signUpSubmit={this.props.signUpSubmit}
          />
        </Tab>
      </Tabs>
    );
  }
}
export default loginForm;
