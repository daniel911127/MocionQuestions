import '../styles/Results.css'
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionsContext';
import { Link } from 'react-router-dom';

export const Results = () => {
  const {
    data,
    questionNumber,
    questionCorrect,
    playerAnswers
  } = useContext(QuestionContext);
  console.log(playerAnswers)
  const answers = data.results.map((question, index) => ({
    question: question.question,
    correctAnswer: question.correct_answer,
    userAnswer: playerAnswers[index], 
    isCorrect: playerAnswers[index] === question.correct_answer 
  }));
  return (
    <div className='container-results'>
      <div className='container-score'>
        <h1>You scored</h1>
        <h2>{questionCorrect}/{questionNumber}</h2>
        <h3>Answers:</h3>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              <p className='results'>{answer.question}</p>
              <p className='results'> {answer.userAnswer}</p>
              <p className='results'>{answer.isCorrect ? 'Correct' : 'Incorrect'}</p>
            </li>
          ))}
        </ul>
        <Link to='/'>Play Again</Link>
      </div>
    </div>
  )
}
