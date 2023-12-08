import './index.css';
import {useState} from "react";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Donec ac odio tempor orci dapibus ultrices in. Ridiculus mus mauris vitae ultricies leo. " +
            "Pulvinar elementum integer enim neque volutpat ac tincidunt. Odio facilisis mauris sit amet " +
            "massa vitae tortor condimentum. Dictumst quisque sagittis purus sit amet volutpat consequat " +
            "mauris. Maecenas ultricies mi eget mauris pharetra et. Pellentesque eu tincidunt tortor aliquam"
    },
    {
        title: "How long do I have to return my chair?",
        text: "Donec ac odio tempor orci dapibus ultrices in. Ridiculus mus mauris vitae ultricies leo. " +
            "Pulvinar elementum integer enim neque volutpat ac tincidunt. Odio facilisis mauris sit amet " +
            "massa vitae tortor condimentum. Dictumst quisque sagittis purus sit amet volutpat consequat " +
            "mauris. Maecenas ultricies mi eget mauris pharetra et. Pellentesque eu tincidunt tortor aliquam"
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Donec ac odio tempor orci dapibus ultrices in. Ridiculus mus mauris vitae ultricies leo. " +
            "Pulvinar elementum integer enim neque volutpat ac tincidunt. Odio facilisis mauris sit amet " +
            "massa vitae tortor condimentum. Dictumst quisque sagittis purus sit amet volutpat consequat " +
            "mauris. Maecenas ultricies mi eget mauris pharetra et. Pellentesque eu tincidunt tortor aliquam"
    }
]

export default function App() {
    return (
        <div>
            <Accordion data={faqs}/>
        </div>
    );
}

function Accordion({data}) {
    return (
        <div className="accordion">
            {data.map((element, index) => <AccordionItem title={element.title} text={element.text} num={index}
                                                         key={element.title}/>)}
        </div>
    );
}

function AccordionItem({num, title, text}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}



































