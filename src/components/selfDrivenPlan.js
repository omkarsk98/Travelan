import React from 'react';
import { Form, Header, Grid, Button } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class SelfDrivenPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("11");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Self Driven Plan</Header>
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={8}>
                Zoom Cars
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button positive type="submit">Book</Button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
              Revv
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
              Carzonrent
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as="h3">Features</Header>
          <Grid>
            <Grid.Row centered mobile={16}>Air-Conditioned</Grid.Row>
            <Grid.Row centered mobile={16}>4-Wheel Drive</Grid.Row>
            <Grid.Row centered mobile={16}>Cheapest Rate</Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
};