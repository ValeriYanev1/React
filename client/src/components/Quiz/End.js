import React, { useContext } from 'react';
import { QuizContext } from './Helpers/Context';
import { Questions } from './Helpers/Questions';
import './App.css';


function End() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restart = () => {
        setScore(0);
        setGameState('menu');
    };

    return (
        <div className='end'>
            <h1>Quiz Score:</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default End;
