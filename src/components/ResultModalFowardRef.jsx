import React from "react";

const ResultModalFowardRef = React.forwardRef(function ResultModalFowardRef({ targetTime, remainingTime, onReset}, ref) {
    const dialogRef = React.useRef();
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    const userLost = remainingTime <= 0;
    React.useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialogRef.current.showModal();
            }
        };
    });
    return (
        <dialog ref={dialogRef} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You Score {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong> seconds</p>
            <p>You stopped timer with <strong> {formattedRemainingTime} seconds left</strong></p>

            <form method='dialog' onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModalFowardRef;