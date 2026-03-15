import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Start from "./components/Start";

function App() {
  const [qwizStart, setQwizStart] = useState(false);

  const startQwiz = (formValues) => {
    const params = new URLSearchParams();
    if (formValues.amount > 0) {
      params.append("amount", formValues.amount);
    }
    if (formValues.difficulty !== "any") {
      params.append("difficulty", formValues.difficulty);
    }
    if (formValues.type !== "any") {
      params.append("type", formValues.type);
    }
    if (formValues.category !== "any") {
      params.append("category", formValues.category);
    }

    fetch(`https://opentdb.com/api.php?${params}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        let questions = data.results.map((el) => {
          el.answers = el.incorrect_answers
            .concat(el.correct_answer)
            .sort(() => Math.random() - 0.5);

          return el;
        });
        setQwizStart(true);
      });
  };

  return <>{qwizStart ? <Questions /> : <Start startQwiz={startQwiz} />}</>;
}

export default App;
