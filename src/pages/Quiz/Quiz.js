import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Question from "../../components/Question/Question";

const Quiz= ({name,score,questions,setQuestions,setScore}) => {

    const[options, setOptions] = useState();
	const[currQues, setCurrQues] = useState(0);

	useEffect(() =>{
       console.log(questions);

	   setOptions(
		questions && 
		handleShuffle([
		questions[currQues]?.correct_answer,
		...questions[currQues]?.incorrect_answers,
		// spread operator will spread the incorrect ans as there are 3 incorrect ans
	])
	);
	// cuurques as everytime the curr ques changes the options will also get changed
	},[questions, currQues]);

	console.log(options);
     
	
	const handleShuffle = (optionss) => {
		// to shuffle the ans
       return optionss.sort(()=>Math.random()-0.5);
	};

	  return (
		<div className="quiz">
		  <span className="subtitle">Welcome,{name}</span>

			{questions ? (
                <>   
				<div className="quizInfo">
				<span>{questions[currQues].category}</span>
				<span>
				  {/* {questions[currQues].difficulty} */}
				  Score : {score}
				</span>
			  </div>
			  
			  <Question 
			    currQues={currQues}
				setCurrQues={setCurrQues}
				questions={questions}
				options={options}
				correct={questions[currQues]?.correct_answer}
				score={score}
				setScore={setScore}
				setQuestions={setQuestions}
			   
			  />

			  </>
			): (
				// cicular progree imported from material ui to get the loader
				<CircularProgress style={{ margin: 100 }}
				color='inherit'
				size={150}
			    thickness={1}

			/>
			)}
		  
		</div>
	  );
	};



export default Quiz;
