import React from 'react';
import { Header, List, Icon, Button } from 'semantic-ui-react';

export default class SelfDrivenPlan extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Self Driven Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Zoom Cars <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Revv <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Carzonrent <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
        </List>
        <Header as='h3'>Skills</Header>
        <List as='ol'>
            <List.Item as='li'>Air-Conditioned</List.Item>
            <List.Item as='li'>4-Wheel Drive</List.Item>
            <List.Item as='li'>Cheapest Rate</List.Item>
        </List>
      </div>
    );
  }
};