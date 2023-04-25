import React, { useState } from 'react';

import "./Home.css";
import { Button, MenuItem, TextField } from '@material-ui/core';
import Categories from '../../data/categories';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {  useNavigate } from 'react-router-dom';


const Home = ({name, setName, fetchQuestions}) => {
     //creating the states
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
     
    
    const Navigate = useNavigate();
    
    
     
    const handleSubmit = () => {
      if (!category || !difficulty || !name) {
        setError(true);
        return;
      }
      else {
        setError(false);
        fetchQuestions(category, difficulty);
        Navigate("/quiz");
      }
    };

  return (
    <div className='content'>

      <div className='login'>
       <span style={{fontSize: 30}}> Login!</span>

       <div className='login_form'>
       {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

       <TextField style={{marginBottom:25,background: "rgb(232, 241, 250)",}} 
       label='Enter Your Name' 
       variant="outlined"
       onChange={(e) => setName(e.target.value)}
       />
       <TextField select label="Select Category" 
        value={category}
         variant='outlined'
         onChange={(e) => setCategory(e.target.value)}
         style={{marginBottom:25,background: "rgb(232, 241, 250)"}} >
           
         
         {
          Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
             {cat.category}
         </MenuItem>
          ))}
          </TextField>
       
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}

            style={{ marginBottom: 25,background: "rgb(232, 241, 250)"
             }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" 
          color="primary"
            size="large"
            onClick={handleSubmit}
            >
            Start Quiz
          </Button>

       </div>




      </div>
      <div className='logo'>
      <img src="data:image/jpeg;base64,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" className='banner' alt="quiz img" />
      </div>
     

    </div>
  );
}

export default Home
