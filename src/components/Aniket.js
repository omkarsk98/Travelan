import React from 'react';
import ExperiencePlan from './experiencePlan';
import LocalTransportPlan from './localTransportPlan';
import AccomodationPlan from './accomodationPlan';
import GuidePlan from './guidePlan';
import SelfDrivenPlan from './selfDrivenPlan';
import ChaffeurDrivenPlan from './chaffeurDrivenPlan';
import ProspectiveTravelPlan from './prospectiveTravelPlan';

export default class Aniket extends React.Component{
  render(){
    return(
      <div>
          <ExperiencePlan />
          <LocalTransportPlan />
          <AccomodationPlan />
          <GuidePlan />
          <SelfDrivenPlan />
          <ChaffeurDrivenPlan />
          <ProspectiveTravelPlan />
      </div>
    );
  }
}