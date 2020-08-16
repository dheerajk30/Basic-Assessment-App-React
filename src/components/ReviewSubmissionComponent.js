import React from "react";
import "../assets/styles.css";

const reviewIcon = require('../assets/review.png')

export class ReviewSubmissionComponent extends React.Component {
  renderSubmissionDetails = () => {
    return Object.keys(this.props.submissionData).map((index) => {
      return (
        <div className={"attempted-answer-text"}>
          <b>#{parseInt(index) + 1}</b>: {this.props.submissionData[index]}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={"review-submission-container"}>
        <h6><img alt={''} src={reviewIcon} width={50} /></h6>
        <h6>Review Answers Here</h6>
        {this.renderSubmissionDetails()}
      </div>
    );
  }
}
