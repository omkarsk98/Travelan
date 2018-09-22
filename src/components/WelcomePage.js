import React from "react";
import {
  Button,
  Checkbox,
  Image,
  Grid,
  List,
  Form,
  Select,
  Input
} from "semantic-ui-react";

const style = {
  padding: 20,
  margin: 20,
  border:"solid black 2px"
};

const alignLeft = {
  textAlign: "left",
  verticalAlign: "middle"
};

const from = [
  { key: "pune", value: "pune", flag: "pune", text: "Pune" },
  { key: "Srinagar", value: "srinagar", flag: "srinagar", text: "Srinagar" }
];

const to = [
  { key: "jaipur", value: "jaipur", flag: "jaipur", text: "Jaipur" },
  { key: "Ajmer", value: "ajmer", flag: "ajmer", text: "Ajmer" }
];

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <Form style={style}>
          <h2>Wish to travel?</h2>
          <br />
          <Form.Field>
            <label>From</label>
            <Select placeholder="Travle from.." options={from} />
          </Form.Field>
          <Form.Field>
            <label>To</label>
            <Select placeholder="Travel to.." options={to} />
          </Form.Field>
          <Form.Field>
            <label>Number of days</label>
            <Input placeholder="number of days..." />
          </Form.Field>
          <b>Places to visit is this city.</b>
          <List style={alignLeft}>
            <List.Item>
              <Grid>
                <Grid.Row>
                  <Grid.Column
                    mobile={8}
                    verticalAlign="middle"
                    textAlign="center"
                  >
                    Nahargarh
                  </Grid.Column>
                  <Grid.Column mobile={8}>
                    <Image
                      src="https://www.travelogyindia.com/images/jaipur/nahargarh-fort-300.jpg"
                      size="small"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Item>
            <List.Item>
              <Grid>
                <Grid.Row>
                  <Grid.Column
                    mobile={8}
                    verticalAlign="middle"
                    textAlign="center"
                  >
                    Amer Fort
                  </Grid.Column>
                  <Grid.Column mobile={8}>
                    <Image
                      src="https://www.culturalindia.net/iliimages/Amber-Fort-ili-148-img-6.jpg"
                      size="small"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Item>
          </List>
          <Button primary type="submit">Book</Button>
        </Form>
      </div>
    );
  }
}
