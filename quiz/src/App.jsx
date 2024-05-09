import React, { useState } from 'react';
import './App.css';

const questions=[
  {
    question:'What is the capital city of France?',
    options:['London','Paris','Rome','Berlin'],
    answer:'Paris'
  },
  {
    question:'Who wrote the play "Romeo and Juliet"?',
    options:['Charles Dickens','William Shakespeare','Jane Austen','Mark Twain'],
    answer:'William Shakespeare'
  },
  {
    question:'What is the chemical symbol for water?',
    options:['H','O2','H2O','HO'],
    answer:'H2O'
  },
  {
    question:'Who painted the Mona Lisa?',
    options:['Vincent van Gogh','Leonardo da Vinci','Pablo Picasso','Michelangelo'],
    answer:'Leonardo da Vinci'
  },
  {
    question:'What is the largest planet in our solar system?',
    options:['Mars','Venus','Jupiter','Saturn'],
    answer:'Jupiter'
  },
  {
    question:'What is the tallest mountain in the world?',
    options:['Mount Kilimanjaro','Mount Everest','K2','Mount Fiji'],
    answer:'Mount Everest'
  },
  {
    question:'In whichh year did the Titanic sink?',
    options:['1909','1912','1915','1921'],
    answer:'1912'
  },
  {
    question:'Who was the first man to walk on the moon?',
    options:['Neil Armstrong','Buzz Aldrin','Yuri Gagarin','Alan Shepard'],
    answer:'Neil Armstrong'
  },
  {
    question:'What is the chemical symbol for gold?',
    options:['Go','Ag','Au','AgAu'],
    answer:'Au'
  },
  {

    question:'Which animal is known as the "King of the Jungle"?',
    options:['Elephant','Tiger','Lion','Gorilla'],
    answer:'Lion'
  },
  {

    question:'What is the currency of Japan?',
    options:['Dollar','Euro','Pound','Yen'],
    answer:'Yen'
  },
  {

    question:'Who painted the ceiling of the Sistine Chapel?',
    options:['Michelangelo','Leonardo da Vinci','Raphael','Donatello'],
    answer:'Michelangelo'
  },
  {

    question:"What is the main component of the Earth's atmosphere?",
    options:['Oxygen','Nitrogen','Carbon dioxide','Helium'],
    answer:'Nitrogen'
  },
  {
    question:'What is the boiling point of water in degree Celsius?',
    options:['50°C','75°C','100°C','150°C'],
    answer:'100°C'
  },
  {
    question:'Who is the current President of the United States?',
    options:['Joe Biden','Donald Trump','Barack Obama','George W.Bush'],
    answer:'Joe Biden'
  }
];

function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [showScore,setShowScore]=useState(false);

  const handleAnswer=(selectedOption)=>{
    const isCorrect=selectedOption===questions[currentQuestion].answer;
    if(isCorrect){
      setScore(score+1);
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  };

  const handleReset=()=>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }
  return (
    <div className="quiz-app">
    {showScore ? (
      <div className="score-section">
        <h2>Your Score is {(score/15)*100}%</h2>
        <button onClick={handleReset}>Restart Quiz</button>
      </div>
    ) : (
      <div className="question-section">
        <h2>Question {currentQuestion+1}:</h2>
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}

export default App;