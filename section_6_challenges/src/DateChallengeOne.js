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

    const date = new Date();

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
        if (count > 0) {
            setCount((c) => c - step);
        }
    }

    function increaseCount() {
        setCount((c) => c + step);
    }

    return (
        <div>
            <div className="field">
                <button className="field-button" onClick={decreaseStep}>-</button>
                <p>Step: {step}</p>
                <button className="field-button" onClick={increaseStep}>+</button>
            </div>
            <div className="field">
                <button className="field-button" onClick={decreaseCount}>-</button>
                <p>Count: {count}</p>
                <button className="field-button" onClick={increaseCount}>+</button>
            </div>
            <div>Date: {date.toDateString()}</div>
        </div>
    );

}