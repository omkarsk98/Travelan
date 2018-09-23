import React from 'react';
import { Header, Form, List, Icon, Button } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class ChaffeurDrivenPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("13");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Chaffeur Driven Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Dev Pari Travels <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Rajputana Travels <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Savaari <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
        </List>
        <Header as='h3'>Features</Header>
        <List as='ol'>
            <List.Item as='li'>Mobile Ready</List.Item>
            <List.Item as='li'>Flexible Quotation Rates</List.Item>
            <List.Item as='li'>Quick and Secure Payments</List.Item>
        </List>
        </Form>
      </div>
    );
  }
};