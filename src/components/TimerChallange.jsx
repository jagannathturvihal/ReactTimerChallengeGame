import React from 'react';
import ResultModal from './ResultModal';
import ResultModalFowardRef from './ResultModalFowardRef';


export default function TimerChallange({ title, targetTime }) {
    const timer = React.useRef();
    const resultDialogue = React.useRef();

    // const [timeExpired, setTimeExpired] = React.useState(false);
    // const [timerStarted, setTimerStarted] = React.useState(false);
    const [timeRemaining, setTimeRemaining] = React.useState(targetTime * 1000);
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        resultDialogue.current.openDialog();
    }
    
    function handleReset () {
        setTimeRemaining(targetTime * 1000);
    }
    // function handClickStartChallenge() {
    //     setTimerStarted(true);
    //     timer.current = setTimeout(() => {
    //         setTimeExpired(true);
    //         resultDialogue.current.openDialog();
    //     }, targetTime * 1000);
    // }

    function handClickStartChallenge() {
        
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handClickStopChallenge() {
        // clearTimeout(timer.current);
        resultDialogue.current.openDialog();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModalFowardRef ref={resultDialogue}  targetTime={targetTime} remainingTime={timeRemaining} onReset ={handleReset}/>
             {/* <ResultModal ref={resultDialogue}  targetTime={targetTime} remainingTime={timeRemaining} onReset ={handleReset} /> */}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-name">
                    {targetTime} in second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={isTimerActive ? handClickStopChallenge : handClickStartChallenge}>
                        {isTimerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'challenge-active' : ''}>
                    {isTimerActive ? 'Time is running' : 'Timer Inactive'}
                </p>
            </section>
        </>
    )
}