import React from "react";
import { Header, Button, Form } from "semantic-ui-react";

export default class LocalTransportPlan extends React.Component {
  self = () => {
    this.props.toNextState("10");
  };
  driver = () => {
    this.props.toNextState("12");
  };
  render() {
    return (
      <div>
        <Form>
          <Header as="h1">Local Transport Plan</Header>
          <Button size="massive" onClick={this.self}>
            Self Driven
          </Button>
          <Button size="massive" onClick={this.driver}>
            Chaffeur Driven
          </Button>
        </Form>
      </div>
    );
  }
}
