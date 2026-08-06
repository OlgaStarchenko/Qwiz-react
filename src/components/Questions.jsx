import React from "react";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import {
  getCorrectAnswers,
  handlePlayAgain,
  isAllSelected,
  selectAnswer,
  setEndQwiz,
} from "../store/qwizSlice";

export default function Question() {
  const { qwizEnd, questionsList } = useSelector((state) => state.qwiz);
  const allSelected = useSelector(isAllSelected);
  const correctAnswers = useSelector(getCorrectAnswers);

  const dispatch = useDispatch();

  function getClassName(question, answer) {
    if (question.selected_answer === answer && !qwizEnd) {
      return "select";
    } else if (question.correct_answer === answer && qwizEnd) {
      return "true";
    } else if (
      question.selected_answer === answer &&
      answer !== question.correct_answer &&
      qwizEnd
    ) {
      return "false";
    } else {
      return "";
    }
  }

  return (
    <div className="questions__container">
      <div className="questions__body">
        {questionsList.map((question, questionIndex) => (
          <div key={questionIndex} className="questions__item">
            <p className="questions__text">{parse(question.question)}</p>

            <div className="answer__options">
              {question.answers.map((answer, answerIndex) => (
                <button
                  disabled={qwizEnd}
                  key={answerIndex}
                  className={`button__answer ${getClassName(question, answer)}`}
                  onClick={() =>
                    dispatch(selectAnswer({ questionIndex, answer }))
                  }
                >
                  {parse(answer)}
                </button>
              ))}
            </div>
            <hr className="horizontal__line" />
          </div>
        ))}
      </div>

      {qwizEnd ? (
        <div className="response__counter">
          <p className="response__counter__text">
            You scored {correctAnswers}/{questionsList.length} correct answers
          </p>
          <button
            className="reset__button"
            onClick={() => dispatch(handlePlayAgain())}
          >
            Play again
          </button>
        </div>
      ) : (
        <div className="check__answers">
          <button
            className="check__answers__button"
            disabled={!allSelected}
            onClick={() => dispatch(setEndQwiz())}
          >
            Check answers
          </button>
        </div>
      )}
    </div>
  );
}
