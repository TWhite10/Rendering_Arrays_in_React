import { useState } from "react";
import Learner from "./components/Learner.jsx";
import { learnerData } from "./sourceData.jsx";
import "./App.css";

function App() {
  const [learners, setLearners] = useState(learnerData);
  return (
    <>
      <h1>Learners</h1>
      {learners.map((learner) => {
        return <Learner key={learner.name} learner={learner} />;
      })}
    </>
  );
}

export default App;
