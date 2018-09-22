import React from "react";
import { Button, Checkbox, Form, Select, Input } from "semantic-ui-react";
const style = {
  padding: 20,
  margin: 20
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
            <Input placeholder='Search...' />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
