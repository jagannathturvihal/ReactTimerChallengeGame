import React from 'react';
import ResultModal from './ResultModal';


export default function TimerChallange({ title, targetTime }) {
    const timer = React.useRef();
    const resultDialogue = React.useRef();

    const [timeExpired, setTimeExpired] = React.useState(false);
    const [timerStarted, setTimerStarted] = React.useState(false);

    function handClickStartChallenge() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            resultDialogue.current.openDialog();
        }, targetTime * 1000);
    }

    function handClickStopChallenge() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={resultDialogue} result="Lost" targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-name">
                    {targetTime} in second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handClickStopChallenge : handClickStartChallenge}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'challenge-active' : ''}>
                    {timerStarted ? 'Time is running' : 'Timer Inactive'}
                </p>
            </section>
        </>
    )
}