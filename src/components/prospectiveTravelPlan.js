import React from 'react';
import { Header, List, Icon, Button } from 'semantic-ui-react';

export default class ProspectiveTravelPlan extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Prospective Travel Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Forts and Food <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Pink City and Forts <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>All Around Pink City <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
        </List>
        <Header as='h3'>Features</Header>
        <List as='ol'>
            <List.Item as='li'>Amer Fort</List.Item>
            <List.Item as='li'>Nahargarh Fort</List.Item>
            <List.Item as='li'>Mehrangarh Fort</List.Item>
        </List>
      </div>
    );
  }
};