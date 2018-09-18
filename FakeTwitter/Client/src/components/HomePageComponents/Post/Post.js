import React from "react";
import { FormGroup, FormControl, ControlLabel, Button, Jumbotron } from "react-bootstrap";

const post = () => {
  return (
    <Jumbotron style={styles.jumbo}>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
      <Button>Post</Button>
    </Jumbotron>
  );
};
const styles ={
  jumbo:{
      backgroundColor: '#7837cc'
  }
}
export default post;