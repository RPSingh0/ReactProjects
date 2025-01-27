import {useState} from "react";
import './index.css';

export default function App() {
    return (
        <div>
            <StepAndCount/>
        </div>
    )
}

function StepAndCount() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    let date = new Date();

    // derived state... next section
    date.setDate(date.getDate() + count);

    function decreaseStep() {
        if (step > 1) {
            setStep((s) => s - 1);
        }
    }

    function increaseStep() {
        setStep((s) => s + 1);
    }

    function decreaseCount() {
        setCount((c) => c - step);
    }

    function increaseCount() {
        setCount((c) => c + step);
    }

    function reset() {
        setStep(1);
        setCount(0);
        date = new Date();
    }

    return (
        <div className="content">
            <div className="field">
                <button className="field-button" onClick={decreaseStep}>-</button>
                <input type="range" min="1" max="10" value={step}
                       onChange={(event) => setStep(Number(event.target.value))}/>{step}
                <button className="field-button" onClick={increaseStep}>+</button>
            </div>
            <div className="field">
                <button className="field-button" onClick={decreaseCount}>-</button>
                <input type="text" value={count} onChange={(event) => setCount(Number(event.target.value))}/>
                <button className="field-button" onClick={increaseCount}>+</button>
            </div>
            <div>Date: {date.toDateString()}</div>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    );

}