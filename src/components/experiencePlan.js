import React from 'react';
import { Header, Button } from 'semantic-ui-react';

export default class ExperiencePlan extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Experience Plan</Header>
        <Button size='massive'>Self Discover</Button>
        <Button size='massive'>Need Help</Button>
      </div>
    );
  }
}