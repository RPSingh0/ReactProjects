import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    return (
        <div>
            <Steps/>
        </div>
    );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
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

                    <StepMessage step={step}>
                        {messages[step - 1]}
                    </StepMessage>

                    <div className="buttons">
                        {/*<Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious} text="Previous" emoji="👈"/>*/}
                        {/*<Button bgColor="#7950f2" textColor="#fff" onClick={handleNext} text="Next" emoji="👉"/>*/}

                        {/*Below is the children props*/}
                        <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
                            <span>👈</span> Previous
                        </Button>
                        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>)
            }
        </>
    );
}

function StepMessage({step, children}) {
    return (
        <div className="message">
            <h3>Step {step}:</h3>
            {children}
        </div>
    );
}

// A GENERIC BUTTON COMPONENT WITH `CHILDREN PROP`
// function Button({textColor, bgColor, onClick, text, emoji}) {
function Button({textColor, bgColor, onClick, children}) {
    return (
        <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>
            {children}
        </button>
    );
}
