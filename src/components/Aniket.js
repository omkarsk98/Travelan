import React from 'react';
import ExperiencePlan from './experiencePlan';
import LocalTransportPlan from './localTransportPlan';

export default class Aniket extends React.Component{
  render(){
    return(
      <div>
          <ExperiencePlan />
          <LocalTransportPlan />
      </div>
    );
  }
}