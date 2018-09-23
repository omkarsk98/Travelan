import React from "react";
import WelcomePage from "./WelcomePage";
import TravelPlan from "./TravelPlan";
import Book from "./Book";
import ExperiencePlan from "./experiencePlan";
import LocalTransportPlan from "./localTransportPlan";
import AccomodationPlan from "./accomodationPlan";
import GuidePlan from "./guidePlan";
import SelfDrivenPlan from "./selfDrivenPlan";
import ChaffeurDrivenPlan from "./chaffeurDrivenPlan";
import ProspectiveTravelPlan from "./prospectiveTravelPlan";
import ThankYou from "./thankYou";
import { Segment, Message } from "semantic-ui-react";

export default class AllComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoute: "1"
    };
  }
  adjustState = adjustTo => {
    this.setState({
      activeRoute: adjustTo
    });
  };
  render() {
    return (
      <Segment color='green' style={{margin:50}}>
        <h2>Travelan</h2>
        <h3 style={{ marginTop: 0 }}>Be your own travel agent!</h3>
        {(() => {
          if (this.state.activeRoute === "1") {
            console.log("State 1");
            return (
              <div>
                <WelcomePage toNextState={this.adjustState} /> {/* 1 */}
              </div>
            );
          }

          if (this.state.activeRoute === "2") {
            console.log("State 2");
            return (
              <div>
                <TravelPlan toNextState={this.adjustState} /> {/* 2 */}
              </div>
            );
          }

          if (this.state.activeRoute === "3" || this.state.activeRoute === "5" || this.state.activeRoute === "8" || this.state.activeRoute === "11" || this.state.activeRoute === "13" || this.state.activeRoute === "15") {
            return (
              <div>
                <Book
                  toNextState={this.adjustState}
                  currentState={this.state.activeRoute}
                />{" "}
                {/* 3 */}
              </div>
            );
          }

          if (this.state.activeRoute === "4") {
            return (
              <div>
                <AccomodationPlan toNextState={this.adjustState} /> {/* 4 */}
              </div>
            );
          }

          if (this.state.activeRoute === "6") {
            return (
              <div>
                <ExperiencePlan toNextState={this.adjustState} /> {/* 6 */}
              </div>
            );
          }

          if (this.state.activeRoute === "7") {
            return (
              <div>
                <GuidePlan toNextState={this.adjustState} /> {/* 7 */}
              </div>
            );
          }

          if (this.state.activeRoute === "9") {
            return (
              <div>
                <LocalTransportPlan toNextState={this.adjustState} /> {/* 9 */}
              </div>
            );
          }

          if (this.state.activeRoute === "10") {
            return (
              <div>
                <SelfDrivenPlan toNextState={this.adjustState} /> {/* 10 */}
              </div>
            );
          }

          if (this.state.activeRoute === "12") {
            return (
              <div>
                <ChaffeurDrivenPlan toNextState={this.adjustState} /> {/* 12 */}
              </div>
            );
          }

          if (this.state.activeRoute === "14") {
            return (
              <div>
                <ProspectiveTravelPlan toNextState={this.adjustState} />{" "}
                {/* 14 */}
              </div>
            );
          }

          if (this.state.activeRoute === "16") {
            return (
              <div>
                <ThankYou />
              </div>
            );
          }
        })()}
        
        <Message floating color='olive' style={{padding:10, paddingBottom:30}}>
          <b>This is a complete customised Iternary System.</b>
          <br />
          Dependency on strangers regarding fooding and accomodation removed!
          <br />
          Compare the prices of all the local products here. Don't get
          overcharged.
          <br />
          Know authentic food and handicrafts.
        </Message>
      </Segment>
    );
  }
}
