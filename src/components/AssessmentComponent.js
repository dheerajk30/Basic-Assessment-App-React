import React from "react";
import { QuestionComponent } from "./QuestionComponent";
import { ReviewSubmissionComponent } from "./ReviewSubmissionComponent";
import "../assets/styles.css";

const question = require("../assets/question.jpeg");

export class AssessmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      submissionData: {},
    };
  }

  updateSubmissionData = (index, value) => {
    const submissionData = Object.assign({}, this.state.submissionData);
    submissionData[index] = value;
    this.setState({
      submissionData,
    });
  };

  onPreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1,
      });
    }
  };

  onNextQuestion = () => {
    if (this.state.currentQuestion < this.props.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
  };

  getFinalScore = () => {
    let score = 0;
    Object.keys(this.state.submissionData).map((questionIndex) => {
      const attemptedAnswer = this.state.submissionData[questionIndex];
      const expectedAnswer = this.props.questions[parseInt(questionIndex)]
        .answer;

      if (expectedAnswer == attemptedAnswer) {
        score++;
      }
    });
    return score;
  };

  onSubmit = () => {
    const score = this.getFinalScore();
    this.props.onSubmit(score);
  };

  renderNavigationHeader = () => {
    return (
      <div>
        <h6>
          <img alt={""} src={question} width={30} />
        </h6>
        <div className={"navigation-header"}>
          {this.state.currentQuestion > 0 && (
            <button
              className={"navigationButton "}
              onClick={this.onPreviousQuestion}
            >
              &#8678;
            </button>
          )}

          <h6 className={"title"}>Attempt Questions Here</h6>
          {this.state.currentQuestion < this.props.questions.length - 1 && (
            <button
              className={"navigationButton "}
              onClick={this.onNextQuestion}
            >
              &#8680;
            </button>
          )}
        </div>
      </div>
    );
  };

  renderNavigationFooter = () => {
    const attemptedQuestions = Object.keys(this.state.submissionData);
    return attemptedQuestions.length == this.props.questions.length ? (
      <button className={"navigationButton submit-btn"} onClick={this.onSubmit}>
        Submit
      </button>
    ) : null;
  };

  render() {
    return (
      <div className={"assessment-container"}>
        <ReviewSubmissionComponent
          submissionData={this.state.submissionData}
          totalQuestionsCount={this.props.questions.length}
        ></ReviewSubmissionComponent>
        <div className={"question-container"}>
          {this.renderNavigationHeader()}
          <QuestionComponent
            questionIndex={this.state.currentQuestion}
            activeQuestion={this.props.questions[this.state.currentQuestion]}
            updateSubmissionData={this.updateSubmissionData}
            selectedOption={
              this.state.submissionData[this.state.currentQuestion]
            }
          ></QuestionComponent>
          {this.renderNavigationFooter()}
        </div>
      </div>
    );
  }
}
