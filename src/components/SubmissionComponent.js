import React from "react";
import "../assets/styles.css"

const correctIcon = require('../assets/correct.png')
export class SubmissionComponent extends React.Component {
    render() {
        return (
            <div className={'submission-container'} >
                <h2><img alt={''} src={correctIcon} width={100} /></h2>
                <h2>You have successfully submitted the Assessment</h2>
                <span className={'submission-field'}> - <b>Question Asked</b>: {this.props.totalQuestionsCount}</span>
                <span className={'submission-field'}> - <b>Question Correct</b>: {this.props.userScore}</span>
                <span className={'submission-field'}> - <b>Your score</b> : {((this.props.userScore / this.props.totalQuestionsCount) * 100).toFixed(2)}</span>
            </div>
        )
    }
}