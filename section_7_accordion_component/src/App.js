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

    const [curOpen, setCurOpen] = useState(0);

    return (
        <div className="accordion">
            {data.map((element, index) =>
                <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={element.title} num={index}
                               key={element.title}>
                    {element.text}
                </AccordionItem>
            )}

            <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title="Test 1" num={22}
                           key="Test 1">
                <p>Allows React developers to:</p>
                <ul>
                    <li>Break up UI into components</li>
                    <li>Make components reusable</li>
                    <li>Place state efficiently</li>
                </ul>
            </AccordionItem>
        </div>
    );
}

function AccordionItem({num, title, curOpen, onOpen, children}) {

    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}



































