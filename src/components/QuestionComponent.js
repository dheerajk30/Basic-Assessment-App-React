import React from "react";
import '../assets/styles.css'

export class QuestionComponent extends React.Component {
  onValueChange = (value) => {
    this.props.updateSubmissionData(this.props.questionIndex, value);
  };

  renderOptions = () => {
    const question = this.props.activeQuestion;
    return question.options.map((option) => {
      return (
        <label className={'question-option'}>
          <input
            type="radio"
            value={option.value}
            checked={this.props.selectedOption === option.value}
            onChange={() => this.onValueChange(option.value)}
          />
          {option.displayText}
        </label>
      );
    });
  };

  render() {
    return (
      <div className={'title-options'} >
        <span className={'question-title'}>Question# {this.props.questionIndex + 1} {this.props.activeQuestion.questionText}</span>
        {this.renderOptions()}
      </div>
    );
  }
}
