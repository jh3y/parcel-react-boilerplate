import React, { Component } from 'react'

import { container } from '../../../styles/index.styl'
import kitty from '../../../assets/images/kitty.jpg'
import { Button, Image } from './scaler.style'

class Scaler extends Component {
  state = {
    smaller: true,
  }

  handleClick = () => {
    this.setState({
      smaller: !this.state.smaller,
    })
  }

  render = () => {
    const { smaller } = this.state
    return (
      <div className={container}>
        <Image smaller={smaller} src={kitty} />
        <Button onClick={this.handleClick}>
          {smaller ? 'Make me bigger' : 'Make me smaller'}
        </Button>
      </div>
    )
  }
}

export default Scaler
