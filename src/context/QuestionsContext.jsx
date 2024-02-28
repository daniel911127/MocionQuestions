import {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const QuestionContext=createContext();

// eslint-disable-next-line react/prop-types
export const QuestionProvider=({children})=>{
  const [data,  setData]=useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionCorrect, setQuestionCorrect] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState([]); 
  const incrementQuestionNumber = () => {
    setQuestionNumber(prev => prev + 1);
  };

  const incrementCorrectAnswers = () => {
    setQuestionCorrect(prev => prev + 1);
  };
  const handlePlayerAnswer = (answer) => {
    setPlayerAnswers((prevAnswers) => [...prevAnswers, answer]);
  };
  const resetData=()=>{
    setQuestionNumber(1);
    setQuestionCorrect(0);
    setPlayerAnswers([]);
  }
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get(' https://opentdb.com/api.php?amount=12&difficulty=hard&type=boolean')
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  },[])
  return<QuestionContext.Provider value={{data,questionCorrect,questionNumber,incrementQuestionNumber,incrementCorrectAnswers,handlePlayerAnswer,playerAnswers,resetData}}>{children} </QuestionContext.Provider>
}
