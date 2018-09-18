import React, { Component } from "react";
import Aux from "../../hoc/aux";
import HomepageNavBar from "../../components/UI/HomepageNavbar/HomepageNavbar";
import Post from "../../components/HomePageComponents/Post/Post";
import { Row, Col, Grid } from "react-bootstrap";

class Homepage extends Component {
  state = {
    username: null
  };
  componentDidMount() {}

  render() {
    return (
      <Aux>
        <HomepageNavBar />
        <Grid>
          <Row>
            <Col md={2} />
            <Col md={8}>
              <Post />
              </Col>
            <Col md={2} />
          </Row>
        </Grid>
      </Aux>
    );
  }
}


export default Homepage;
