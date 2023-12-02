import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {

    // const step = 1;
    // const arr = useState(1);
    // console.log(arr);

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    // const step = 1;

    function handlePrevious() {
        // never update the state like this... instead use a callback function
        // to update the state whenever we want to do that based on the current state
        // if (step > 1) setStep(step - 1);
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < 3) setStep((s) => s + 1);
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>

                    <p className="message">Step {step}: {messages[step - 1]}</p>

                    <div className="buttons">
                        <button
                            style={{backgroundColor: '#7950f2', color: '#fff'}}
                            onClick={handlePrevious}>Previous
                        </button>
                        <button
                            style={{backgroundColor: '#7950f2', color: '#fff'}}
                            onClick={handleNext}>Next
                        </button>
                    </div>
                </div>)
            }
        </>
    )
}
