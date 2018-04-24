import React, { Component } from 'react';
import Preview from './Preview'

class InputForm extends Component {

  state = {
    "formText": "",
    "succsessfulSubmitMessage": false,
    "showPreview": false
  }

  handleChange = (event) => {
    this.setState(
      {formText: event.target.value}
    )
  }

  previewApplication = (event) => {
    if (this.state.showPreview === false) {
      this.setState({
        showPreview: true
      })
    } else if (this.state.showPreview) {
      this.setState({
        showPreview: false
      })
    }
  }

  applicationSubmitted = (event) => {
    event.preventDefault()
    if (this.state.succsessfulSubmitMessage === false) {
      this.setState({
        succsessfulSubmitMessage: true
      })
    } else if (this.state.succsessfulSubmitMessage) {
      this.setState({
        succsessfulSubmitMessage: false
      })
    }
    this.resetForm()
  }

  resetForm = () => {
    this.setState(
      {
        "formText": ""
      }
    )
  }
  render() {
    return (
      <div>
        <form id="application-input" onSubmit={this.applicationSubmitted}>
          <label>Apply Here: </label>
          <textarea id="application-text" rows="8" cols="100" onChange={this.handleChange} value={this.state.formText}></textarea>
          <input id="submit" type="submit" value="Submit" />
        </form>
        { this.state.succsessfulSubmitMessage ? <p id="message">Your application was submitted!</p> : null }
        <button id="preview-toggle" onClick={this.previewApplication}>Show Preview</button>
        { this.state.showPreview ? <Preview formText={this.state.formText} /> : null }
      </div>
    )
  }
}


export default InputForm
