import React from 'react';
import WelcomePage from './WelcomePage';
import TravelPlan from './TravelPlan';
import Book from './Book';

export default class Omkar extends React.Component{
  render(){
    return(
      <div>
        Call all you components here.
        <WelcomePage/>
        <TravelPlan/>
        <Book/>
      </div>
    );
  }
}