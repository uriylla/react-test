import React from 'react'
import Card from '../blocks/Card';

export default class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      isBlack: props.pick !== undefined
    }
  }

  render() {
    return (
      <Card>
        <Card.Text>{this.state.text}</Card.Text>
        {this.state.isBlack &&
          <Card.Pick>{this.state.pick}</Card.Pick>}
      </Card>
    )
  }
}