import React, { useState } from 'react';
import EndScreen from './End';
import Menu from './Menu';
import Quiz from './Quiz';
import { QuizContext } from './Helpers/Context';
import './App.css';

const QuizApp = () => {
    const [gameState, setGameState] = useState('menu');
    const [score, setScore] = useState(0);
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <div className='app'>
{
    (!user?.result?.name) ? (
        < h2 > Please Sign in.</h2>
    ) : (

    < QuizContext.Provider value={{ gameState, setGameState, score, setScore }} >
        {gameState === 'menu' && <Menu />}
        {gameState === 'endScreen' && <EndScreen />}
        {gameState === 'quiz' && <Quiz />}
    </QuizContext.Provider>

)
}

        </div >
    );
};

export default QuizApp;