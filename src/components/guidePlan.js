import React from 'react';
import { Header, List, Icon, Button } from 'semantic-ui-react';

export default class GuidePlan extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Guide Plan</Header>
        <List as='ol'>
            <List.Item as='li'>Mohan Shekhawat <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Rohan Kumawat <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
            <List.Item as='li'>Sohan Airawat <Icon name='arrow alternate circle down' /><Button positive>Book</Button></List.Item>
        </List>
        <Header as='h3'>Skills</Header>
        <List as='ol'>
            <List.Item as='li'>Multi-Lingual</List.Item>
            <List.Item as='li'>Experience of 15 Years</List.Item>
            <List.Item as='li'>Also A Photographer</List.Item>
        </List>
      </div>
    );
  }
};