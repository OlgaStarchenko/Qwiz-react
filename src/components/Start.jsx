import React, { useState } from "react";

export default function Start({ startQwiz }) {
  const [formValues, setFormValues] = useState({
    amount: "5",
    difficulty: "any",
    type: "any",
    category: "any",
  });

  const handleChange = (keyName, value) => {
    setFormValues((prev) => ({ ...prev, [keyName]: value }));
  };
  console.log(formValues);

  return (
    <div className="start">
      <h1 className="start__title">Quizzical</h1>
      <div className="start__body">
        <div className="start__row">
          <p className="start__text">Number of question</p>
          <input
            className="start__input"
            type="number"
            value={formValues.amount}
            onChange={(event) => handleChange("amount", event.target.value)}
          />
        </div>
        <div className="start__row">
          <p className="start__text">Select Difficulty</p>
          <select
            className="start__select difficulty__select"
            value={formValues.difficulty}
            onChange={(event) => handleChange("difficulty", event.target.value)}
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="start__row">
          <p className="start__text">Select Type</p>
          <select
            className="start__select type__select"
            value={formValues.type}
            onChange={(event) => {
              handleChange("type", event.target.value);
            }}
          >
            <option value="any">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>

        <div className="start__row">
          <p className="start__text">Select Category</p>
          <select
            className="start__select category__select"
            value={formValues.category}
            onChange={(event) => {
              handleChange("category", event.target.value);
            }}
          >
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
      </div>
      <button className="start__button" onClick={() => startQwiz(formValues)}>
        Start
      </button>
    </div>
  );
}
