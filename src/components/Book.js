import React from "react";
import { Button, Form } from "semantic-ui-react";
const style = {
  padding: 20,
  margin: 20
};

var previousState = "";

export default class Book extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let goToState = parseInt(previousState);
    if (goToState === 11) this.props.toNextState(String(14));
    else {
      goToState = goToState + 1;
      this.props.toNextState(String(goToState));
    }
  };
  render() {
    previousState = this.props.currentState;

    const title = this.props.bookTitle || "Book Flight";
    const price = this.props.bookPrice || "Rs. 2000";
    return (
      <div style={style}>
        <Form onSubmit={this.handleSubmit}>
          <h2>Booking Confirmation</h2>
          <h4>{title}</h4>
          <b>Price : {price}</b>
          <br />
          <Button primary type="submit">
            Pay
          </Button>
        </Form>
      </div>
    );
  }
}
