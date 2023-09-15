import React, { useState } from 'react';
import { QuizData } from './Datalist';
import QuizeResult from './QuizeResult';

const Quiz = () => {
    const [currentQues, setCurrentQues] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const changeQues = () =>{
        updateScore()
        if(currentQues < QuizData.length-1){
            setCurrentQues(currentQues+1);
            setClickedOption(0)
        }else{
          setShowResult(true)
        }
    }

    const updateScore = () =>{
        if(clickedOption === QuizData[currentQues].answer){
            setScore(score+1)
        }
    }

    const ResetAll = () =>{
        setShowResult(false);
        setCurrentQues(0);
        setClickedOption(0);
        setScore(0)
    }
  return (
    <div>
      <p className='heading-txt' >Quiz APP</p>
      <div className='container'>
      {showResult ? (<QuizeResult score={score} totalScore={QuizData.length} tryAgain={ResetAll}/>) :( 
        <>
      <div className="question">
          <span id='question-number'>{currentQues + 1}.</span>
          <span id='question-text'>{QuizData[currentQues].question}</span>
      </div>
      <div className="option-container">
        {
            QuizData[currentQues].options.map((option,i)=>{
                return(
                    <button className={`option-btn  ${clickedOption === i+1 ? "checked" : null}`} key={i} onClick={()=>{setClickedOption(i+1)}}>
                    {option}</button>
                )
            })
        }
      </div>
      <input type="button" value='Next' id='next-button' onClick={changeQues} />
      </>
      ) }
      </div>
    </div>
  );
}

export default Quiz;
