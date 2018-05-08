import React, { Component } from 'react'

class Preview extends Component {
  render() {
    return (
      <section id="application-preview" >
        <div>{this.props.formText}</div>
      </section>
    )
  }
}


export default Preview
