import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { heading } from './title.css'

class Title extends Component {
  static defaultProps = {
    text: 'I am a Title',
  }

  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    const { props } = this

    return <h1 className={heading}>{props.text}</h1>
  }
}

export default Title
