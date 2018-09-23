import React from "react";
import { Button, Grid, Form } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

const bottomPadding = {
  paddingBottom: 0
};

export default class TravelPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("3");
  };
  render() {
    return (
      <div>
        <Form style={style} onSubmit={this.handleSubmit}>
          <h2>Travel Plan</h2>
          {/* div for Flights */}
          <div>
            <h3>Flight</h3>
            <Grid>
              <Grid.Row style={bottomPadding}>
                <Grid.Column mobile={8}>
                  <b>Air India</b> (Rs. 4000)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={8}>
                  <b>Jet Airways</b> (Rs. 4000)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div>
            <h3>Train</h3>
            <Grid>
              <Grid.Row style={bottomPadding}>
                <Grid.Column mobile={8}>
                  <b>Rajdhani Express</b> (Rs. 2100 1st class)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={8}>
                  <b>Shatabdi Express</b> (Rs. 2100 1st class)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div>
            <h3>Bus</h3>
            <Grid>
              <Grid.Row style={bottomPadding}>
                <Grid.Column mobile={8}>
                  <b>Gill Travels</b> (Rs. 2000 Sleeper)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={8}>
                  <b>Mahalakshmi Travels</b> (Rs. 2000 sleeper)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div>
            <h3>Self Drive</h3>
            <Grid>
              <Grid.Row style={bottomPadding}>
                <Grid.Column mobile={8}>
                  <b>Zoom cars</b> (Rs. 3000 approx.)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={8}>
                  <b>Self owned</b> (Rs. 2400 approx)
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button primary type="submit">
                    Book
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Form>
      </div>
    );
  }
}
