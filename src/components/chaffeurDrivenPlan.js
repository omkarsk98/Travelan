import React from 'react';
import { Header, Form, Grid, Button } from 'semantic-ui-react';

const style = {
  padding: 20,
  margin: 20
};

export default class ChaffeurDrivenPlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("13");
  }
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Chaffeur Driven Plan</Header>
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={8}>
                  Dev Pari Travels
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button positive type="submit">Book</Button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
                Rajputana Travels
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
                Savaari
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as="h3">Features</Header>
          <Grid>
            <Grid.Row centered mobile={16}>Mobile Ready</Grid.Row>
            <Grid.Row centered mobile={16}>Flexible Quotation Rates</Grid.Row>
            <Grid.Row centered mobile={16}>Quick and Secure Payments</Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
};