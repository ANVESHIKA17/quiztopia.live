import React, { useState } from 'react';
import "./Question.css";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Button } from '@material-ui/core';
import { useNavigate} from "react-router-dom";

const Question = ({
    currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {

    const[selected, setSelected] = useState();
    const[error, setError] = useState(false);
    
    const Navigate= useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
      };
    
//  handlecheck will check if the selected ans is correct or not, and it will handle the score
      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score+1);
        setError(false);
      };  

      const handleNext = () => {
        if (currQues > 8) {
          Navigate("/result");
        } else if (selected) {
          setCurrQues(currQues + 1);
          setSelected();
        } else setError("Please select an option first");
      };

      const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
      };

  return (
    <div className="question">
    <h1>Question {currQues +1}</h1>

    <div className='singleQuestion'>
     {/* among the currques we want the ques that is currently going on therefore currques.question */}
     <h2>{questions[currQues].question}</h2>
      
      <div className="options">
      {error && <ErrorMessage>{error}</ErrorMessage>}\

      {options &&
            options.map((i) => (
                <button
                onClick = {() => (handleCheck(i))}
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                
                disabled={selected}
              >
                {i}
              </button>
            ))}
      </div>
      <div className='controls'>
      <Button 
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 , borderRadius:10}}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 , borderRadius:10}}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>

      </div>
    </div>


    </div>
  )
}

export default Question