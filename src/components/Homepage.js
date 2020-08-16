import React from "react";
import { AssessmentComponent } from './AssessmentComponent'
import "../assets/styles.css"
import { SubmissionComponent } from "./SubmissionComponent";
import questions from './questions'
const assessmentIcon = require('../assets/assessment.png')

const ViewType = {
  Welcome: 'Welcome',
  Assessment: 'Assessment',
  Submission: 'Submission'
}

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentView: ViewType.Welcome,
      userScore: 0
    };
  }

  startAssessment = () => {
    this.setState({
      currentView: ViewType.Assessment
    })
  }

  submitAssessment = (score) => {
    this.setState({
      currentView: ViewType.Submission,
      userScore: score
    })
  }

  renderAssessmentPage = () => {
    return <AssessmentComponent questions={this.state.questions} onSubmit={this.submitAssessment}></AssessmentComponent>
  }

  renderSubmissionPage = () => {
    return <SubmissionComponent totalQuestionsCount={this.state.questions.length} userScore={this.state.userScore}></SubmissionComponent>
  }

  renderWelcomePage = () => {
    return <div className={'welcome-page'}>
      <h2><img alt={''} src={assessmentIcon} width={100} /></h2>
      <h2>Welcome to the Assessment</h2>
      <button className={"navigationButton start-btn"} onClick={this.startAssessment}>Start</button>
    </div>
  }

  render() {
    switch (this.state.currentView) {
      case ViewType.Assessment:
        return this.renderAssessmentPage();
      case ViewType.Submission:
        return this.renderSubmissionPage();
      default:
        return this.renderWelcomePage();
    }
  }
}
