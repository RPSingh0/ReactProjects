import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div>
            <DeveloperCard/>
        </div>
    );
}

function DeveloperCard() {
    return (
        <div className="developer-card">
            <DeveloperCardImage/>
            <div className="card-data">
                <DeveloperCardName/>
                <DeveloperCardDescription/>
                <div className="skill">
                    <DeveloperCardSkill color="lightblue" skill="HTML+CSS" emoji="🌿"/>
                    <DeveloperCardSkill color="yellow" skill="Javascript" emoji="🌿"/>
                    <DeveloperCardSkill color="green" skill="Web Design" emoji="🌿"/>
                    <DeveloperCardSkill color="red" skill="Git and Github" emoji="🌿"/>
                    <DeveloperCardSkill color="orangered" skill="React" emoji="🌿"/>
                    <DeveloperCardSkill color="skyblue" skill="Svelte" emoji="🌿"/>
                </div>
            </div>
        </div>
    )
}

function DeveloperCardImage() {
    return (
        <div className="card-image">
            <img src="dev_image/imgg.png" alt="two person standing"/>
        </div>
    )
}

function DeveloperCardName() {
    return (
        <p className="name">Rupinder Pal Singh</p>
    );
}

function DeveloperCardDescription() {
    return (
        <p className="description">Full-stack web developer and teacher at Udemy. When not coding or preparing a course,
                                   I loke to play board
                                   games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
    );
}

function DeveloperCardSkill(props) {
    return (
        <div className="skill-item" style={{backgroundColor: props.color}}>
            <p>{props.skill} {props.emoji}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)