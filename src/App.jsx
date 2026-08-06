import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Questions from "./components/Questions";
import Start from "./components/Start";
import { setQuestionsList, setQwizStart } from "./store/qwizSlice";
import { useGetQwestionsListMutation } from "./api/qwizApi";

function App() {
  const { qwizStart } = useSelector((state) => state.qwiz);

  const [getQwestionsList, { isLoading, isError }] =
    useGetQwestionsListMutation();

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

    getQwestionsList(params)
      .unwrap()
      .then((data) => {
        dispatch(setQwizStart());
        dispatch(setQuestionsList(data));
      });
  };

  return (
    <>
      {qwizStart ? (
        <Questions />
      ) : (
        <Start startQwiz={startQwiz} isLoading={isLoading} isError={isError} />
      )}
    </>
  );
}

export default App;
