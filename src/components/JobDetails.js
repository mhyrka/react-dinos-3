import React, { Component } from 'react'

class JobDetails extends Component {

  render() {
    return (
      <div>
        <section id="job-details">
          <h2>Job Details</h2>
          <h4>{this.props.jobDetails.title}</h4>
          <p>{this.props.jobDetails.description}</p>
        </section>
      </div>
    )
  }
}


export default JobDetails
