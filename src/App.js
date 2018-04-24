import React, { Component } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import InputForm from './components/InputForm'
import JobDetails from './components/JobDetails'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      jobDetails: [],
      succsessfulSubmitMessage: false,
      showPreview: false
    }
  }

  componentDidMount() {
    fetch('./listing.json')
    .then(response => response.json())
    .then(response => {
      this.setState({jobDetails: response})

    })
  }


  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails jobDetails={this.state.jobDetails} />
          <InputForm applicationSubmitted={this.applicationSubmitted}
                     previewApplication={this.previewApplication} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
