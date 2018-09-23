import React from "react";
import { Header, Grid, Button, Form } from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20
};

export default class GuidePlan extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.toNextState("8");
  };
  render() {
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1">Guide Plan</Header>
          <b>Stories are better told than read.</b>
          <br />
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={8}>Mohan Shekhawat</Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>Rohan Kumawat</Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={8}>Sohan Airawat</Grid.Column>
              <Grid.Column mobile={8}>
                <Button positive type="submit">
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as="h3">Features</Header>
          <Grid>
            <Grid.Row centered mobile={16}>
              Multi-Lingual
            </Grid.Row>
            <Grid.Row centered mobile={16}>
              Experience of 15 Years
            </Grid.Row>
            <Grid.Row centered mobile={16}>
              Also A Photographer
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
