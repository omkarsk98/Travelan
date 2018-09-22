import React from 'react';
import { Button } from "semantic-ui-react";
const style = {
  padding: 20,
  margin: 20,
  border: "solid black 2px"
};

export default class Book extends React.Component{
  render(){
    const title = this.props.bookTitle || "Book Flight";
    const price = this.props.bookPrice || "Rs. 2000";
    return(
      <div style={style}>
        <h2>Booking Confirmation</h2>
        <h4>{title}</h4>
        <b>Price:{price}</b>
        <br/>
        <Button primary>Pay</Button>
      </div>
    );
  }
}