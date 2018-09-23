import React from 'react';
import { Header } from 'semantic-ui-react';

export default class ThankYou extends React.Component{
  render(){
    return(
      <div>
          <Header as='h2'>Thank You</Header>
        <br />
        <Header as='h3'>Visit Us Again</Header>
      </div>
    );
  }
}