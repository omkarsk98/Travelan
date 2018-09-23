import React from 'react';
import { Header, List, Icon, Button, Form } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class ProspectiveTravelPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("15");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Prospective Travel Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Forts and Food <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
            <List.Item as='li'>Pink City and Forts <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
            <List.Item as='li'>All Around Pink City <Icon name='arrow alternate circle down' /><Button positive type="submit">Book</Button></List.Item>
        </List>
        <Header as='h3'>Features</Header>
        <List as='ol'>
            <List.Item as='li'>Amer Fort</List.Item>
            <List.Item as='li'>Nahargarh Fort</List.Item>
            <List.Item as='li'>Mehrangarh Fort</List.Item>
        </List>
        </Form>
      </div>
    );
  }
};