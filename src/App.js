
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [name, setName] = useState("");
  const[questions, setQuestions] = useState();
  const[score, setScore] = useState(0);

  const fetchQuestions = async(category="", difficulty="") => {

     const {data} = await axios.get( `https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

     setQuestions(data.results);
    
  };

  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fA%3D%3D&w=1000&q=80)"}}>
      <Header />
       <Routes>

       <Route exact path='/' element={<Home  name={name} setName={setName} fetchQuestions={fetchQuestions} />}/>
       <Route exact path='/quiz' element={<Quiz 
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              />}/>
       <Route exact path='/result' element={<Result name={name} score={score}/>}/>

       </Routes>
      
       
       
      
        

     


      

    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
