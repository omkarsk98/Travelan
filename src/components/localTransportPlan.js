import React from 'react';
import { Header, Button } from 'semantic-ui-react';

export default class LocalTransportPlan extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Local Transport Plan</Header>
        <Button size='massive'>Self Driven</Button>
        <Button size='massive'>Chaffeur Driven</Button>
      </div>
    );
  }
}