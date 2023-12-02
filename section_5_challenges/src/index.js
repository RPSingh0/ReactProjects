import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills_data = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    },
]

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
                    {skills_data.map(skill => <DeveloperCardSkill skillSet={skill} key={skill.skill}/>)}
                </div>
            </div>
        </div>
    )
}

function DeveloperCardSkill({skillSet}) {
    // console.log(skillSet)
    // console.log(skillSet.skill, skillSet.level, skillSet.color);
    const level = skillSet.level === 'beginner' ? '🍀' : skillSet.level === 'intermediate' ? '🌿' : '🍃';

    return (
        <div className="skill-item" style={{backgroundColor: skillSet.color}}>
            <p>{skillSet.skill} {level}</p>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)