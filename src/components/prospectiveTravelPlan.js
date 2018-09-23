import React from 'react';
import { Header, Grid, Button, Form } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class ProspectiveTravelPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("15");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Prospective Travel Plan</Header>
        <b>Wow! I can travel by my own will!</b>
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={8}>
                Forts and Food
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button positive type="submit">Book</Button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
              Pink City and Forts
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
              All Around Pink City
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as="h3">Features</Header>
          <Grid>
            <Grid.Row centered mobile={16}>Amer Fort</Grid.Row>
            <Grid.Row centered mobile={16}>Nahargarh Fort</Grid.Row>
            <Grid.Row centered mobile={16}>Mehrangarh Fort</Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
};