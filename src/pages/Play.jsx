import '../styles/Play.css';
import { useContext, useState } from 'react';
import { QuestionContext } from '../context/QuestionsContext';
import { Link } from 'react-router-dom';

export const Play = () => {
  const {
    data,
    questionNumber,
    incrementQuestionNumber,
    incrementCorrectAnswers,
    handlePlayerAnswer,
    playerAnswers
  } = useContext(QuestionContext);
  let [count, setCount] = useState(0);
  let titulo = data.results[questionNumber - 1];
  let respuesta = titulo.correct_answer;

  const handleclick = (event) => {
    const res = event.target.value;
    handlePlayerAnswer(res)
    setCount(count + 1);
    if (res === respuesta) {
      incrementCorrectAnswers();
    }
    if (questionNumber < 10) {
      incrementQuestionNumber();
    }
  };
  console.log(playerAnswers)
  return (
    <div className="container-play">
      <div className="container-preguntas">
        <h1>{titulo.category}</h1>
        <div className="container-pregunta">
          <h3>{titulo.question}</h3>
          <div className="container-buttons">
            <button
              value="True"
              className="true"
              onClick={handleclick}
              disabled={count === questionNumber}
            >
              TRUE
            </button>
            <button
              className="false"
              value="False"
              onClick={handleclick}
              disabled={count === questionNumber}
            >
              FALSE
            </button>
          </div>
          <p>{questionNumber}/10</p>
          {count === 10 && (
            <p>
              <Link className='results'to='/results'>Check your score!!</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
