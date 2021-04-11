import React, { useState, useContext } from 'react'
import { QuizContext } from './Helpers/Context';
import { Questions } from './Helpers/Questions'
import './App.css';


function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState('');

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setGameState('endScreen');
    };

    return (
        <div className='quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div >
                <button className='question' onClick={() => setOptionChoosen('optionA')}>{Questions[currentQuestion].optionA}</button>
                <button className='question' onClick={() => setOptionChoosen('optionB')}>{Questions[currentQuestion].optionB}</button>
                <button className='question' onClick={() => setOptionChoosen('optionC')}>{Questions[currentQuestion].optionC}</button>
                <button className='question' onClick={() => setOptionChoosen('optionD')}>{Questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} className="question"> Finish </button>
            ) : (
                <button onClick={nextQuestion} className="question">Next Question</button>
            )}
        </div>
    );
};

export default Quiz;