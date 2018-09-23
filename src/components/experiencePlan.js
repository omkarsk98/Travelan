import React from "react";
import { Header, Button, Form } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

export default class ExperiencePlan extends React.Component {
  self = () => {
    this.props.toNextState("9");
  };
  help = () => {
    this.props.toNextState("7");
  };
  render() {
    return (
      <div style={style}>
        <Form>
          <Header as="h1">Experience Plan</Header>
          <Button size="massive" onClick={this.self}>
            Self Discover
          </Button>
          <Button size="massive" onClick={this.help}>
            Need Help
          </Button>
        </Form>
      </div>
    );
  }
}
