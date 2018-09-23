import React from 'react';
import { Header } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class ThankYou extends React.Component{
  render(){
    return(
      <div style={style}>
          <Header as='h2'>Thank You</Header>
        <br />
        <Header as='h3'>Visit Us Again</Header>
      </div>
    );
  }
}