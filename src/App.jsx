import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Questions from "./components/Questions";
import Start from "./components/Start";
import { setQuestionsList, setQwizStart } from "./store/qwizSlice";

function App() {
  const qwizStart = useSelector((state) => state.qwizStart);

  const dispatch = useDispatch();

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
        let questions = data.results.map((el) => {
          el.answers = el.incorrect_answers
            .concat(el.correct_answer)
            .sort(() => Math.random() - 0.5);
          el.selected_answer = null;

          return el;
        });
        console.log(questions);
        dispatch(setQuestionsList(questions));

        dispatch(setQwizStart(true));
      });
  };

  function selectAnswer(questionIndex, answer) {
    setQuestionsList((prev) =>
      prev.map((item, index) => {
        if (index === questionIndex) {
          item.selected_answer = answer;
        }
        return item;
      }),
    );
  }

  return (
    <>{qwizStart ? <Questions selectAnswer={selectAnswer} /> : <Start />}</>
  );
}

export default App;
