import React from "react";
import parse from "html-react-parser";

export default function Question({ questionsList, qwizEnd, selectAnswer }) {
  const allSelected = questionsList.every((item) => item.selected_answer);

  return (
    <div className="questions__container">
      <div className="questions__body">
        {questionsList.map((question, questionIndex) => (
          <div key={questionIndex} className="questions__item">
            <p className="questions__text">{parse(question.question)}</p>

            <div className="answer__options">
              {question.answers.map((answer, answerIndex) => (
                <button
                  key={answerIndex}
                  className={
                    question.selected_answer === answer
                      ? "button__answer select"
                      : "button__answer"
                  }
                  onClick={() => selectAnswer(questionIndex, answer)}
                >
                  {parse(answer)}
                </button>
              ))}
            </div>
            <hr className="horizontal__line" />
          </div>
        ))}
      </div>
      <div className="check__answers">
        <button className="check__answers__button" disabled={!allSelected}>
          Check answers
        </button>
      </div>

      {qwizEnd && (
        <div className="response__counter">
          <p className="response__counter__text">
            You scored <span className="result"></span> correct answers
          </p>
          <button className="reset__button">Play again</button>
        </div>
      )}
    </div>
  );
}
