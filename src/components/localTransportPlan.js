import React from "react";
import { Header, Button, Form } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

export default class LocalTransportPlan extends React.Component {
  self = () => {
    this.props.toNextState("10");
  };
  driver = () => {
    this.props.toNextState("12");
  };
  render() {
    return (
      <div style={style}>
        <Form>
          <Header as="h1">Local Transport Plan</Header>
          <b>I'll ride by myself!</b>
          <br/>
          <Button.Group>
          <Button size="medium" color="green" onClick={this.self}>
            Self Driven
          </Button>
          <Button.Or/>
          <Button size="medium" color="blue" onClick={this.driver}>
            Chaffeur Driven
          </Button>
          </Button.Group>
        </Form>
      </div>
    );
  }
}
