import React from "react";
import { Form, Header, List, Icon, Button } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

export default class ExperiencePlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("5");
  };
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1">Accomodation Plan</Header>
          <List as="ol">
            <List.Item as="li">
              Hotel Highway King <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
            <List.Item as="li">
              Hotel ITC Rajputana <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
            <List.Item as="li">
              Hotel Le Meridien <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
          </List>
          <Header as="h3">Features</Header>
          <List as="ol">
            <List.Item as="li">Free Wifi</List.Item>
            <List.Item as="li">Open Terrace Restaurant</List.Item>
            <List.Item as="li">Free Breakfast</List.Item>
          </List>
        </Form>
      </div>
    );
  }
}
