import React from "react";
import { Form, Header, Grid, Button } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

export default class ExperiencePlan extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toNextState("5");
  };
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1">Accomodation Plan</Header>
          <Grid>
            <Grid.Row>
                <Grid.Column mobile={8}>
                  Hotel Highway King
                </Grid.Column>
                <Grid.Column mobile={8}>
                  <Button positive type="submit">Book</Button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
                Hotel ITC Rajputana
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>
                Hotel Le Meridien
              </Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as="h3">Features</Header>
          <Grid>
            <Grid.Row centered mobile={16}>Free Wifi</Grid.Row>
            <Grid.Row centered mobile={16}>Open Terrace Restaurant</Grid.Row>
            <Grid.Row centered mobile={16}>Free Breakfast</Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
