import React from 'react';
import { Form, Header, List, Icon, Button } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class SelfDrivenPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("11");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Self Driven Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Zoom Cars <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
            <List.Item as='li'>Revv <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
            <List.Item as='li'>Carzonrent <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
        </List>
        <Header as='h3'>Skills</Header>
        <List as='ol'>
            <List.Item as='li'>Air-Conditioned</List.Item>
            <List.Item as='li'>4-Wheel Drive</List.Item>
            <List.Item as='li'>Cheapest Rate</List.Item>
        </List>
        </Form>
      </div>
    );
  }
};