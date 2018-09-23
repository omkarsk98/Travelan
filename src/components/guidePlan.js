import React from "react";
import { Header, List, Icon, Button, Form } from "semantic-ui-react";

export default class GuidePlan extends React.Component {
  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.toNextState("8");
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1">Guide Plan</Header>
          <List as="ol">
            <List.Item as="li">
              Mohan Shekhawat <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
            <List.Item as="li">
              Rohan Kumawat <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
            <List.Item as="li">
              Sohan Airawat <Icon name="arrow alternate circle down" />
              <Button positive type="submit">
                Book
              </Button>
            </List.Item>
          </List>
          <Header as="h3">Skills</Header>
          <List as="ol">
            <List.Item as="li">Multi-Lingual</List.Item>
            <List.Item as="li">Experience of 15 Years</List.Item>
            <List.Item as="li">Also A Photographer</List.Item>
          </List>
        </Form>
      </div>
    );
  }
}
