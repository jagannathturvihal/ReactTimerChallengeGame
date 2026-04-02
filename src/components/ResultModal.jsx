import React from "react";

export default function ResultModal ({ref, result, targetTime}) {
    const dialogRef = React.useRef();
    React.useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialogRef.current.showModal();
            }
        };
    });
    return (
        <dialog ref={dialogRef} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong> seconds</p>
            <p>You stopped timer with <strong> X seconds left</strong></p>

            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
}