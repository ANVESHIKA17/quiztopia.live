import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Result.css"

const Result = ({name,score}) => {
  
 
  const Navigate= useNavigate();

  useEffect(() => {
    if(!name){
      Navigate("/");
    }
  }, [name,Navigate]);

  return (
    <div className='result'>
    <span className='title'>{name}, Your Final Score Is : {score}</span>
    <Button 
     variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/">
          Go To HomePage
    </Button>
    </div>
  
)};

export default Result
