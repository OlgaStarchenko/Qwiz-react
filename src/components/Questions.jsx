import React from 'react'

export default function Question() {
  return (
    <div className="questions__container">
      <div className="questions__body">
        <template className="questions__template">
          <div className="questions__item">
            <p className="questions__text">Вопрос</p>

            <div className="answer__options"></div>
            <hr className="horizontal__line" />
          </div>
        </template>
      </div>
      <div className="check__answers">
        <button className="check__answers__button" disabled>Check answers</button>
      </div>

      <div className="response__counter">
        <p className="response__counter__text">
          You scored <span className="result"></span> correct answers
        </p>
        <button className="reset__button">Play again</button>
      </div>
    </div>
  )
}
