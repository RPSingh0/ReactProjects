import {createContext, useContext, useEffect, useReducer} from "react";
import Error from "../components/Error";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
    questions: [],

    // "loading", "error", "ready", "active", "finished"
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null
};

function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return {...state, questions: action.payload, status: "ready"};

        case 'dataFailed':
            return {...state, status: "error"};

        case 'start':
            return {...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION};

        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points
            };

        case "nextQuestion":
            return {...state, index: state.index + 1, answer: null};

        case "finish":
            return {
                ...state,
                status: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore
            };

        case "restart":
            return {...initialState, questions: state.questions, status: "ready", highscore: state.highscore};

        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status
            };

        default:
            throw new Error("Action is unknown");
    }
}

/**
 * The QuizContextProvider, encapsulates the logic of state management and returns the context provider element
 * @param children child components that will get access to the context used
 * @returns The <QuizContextProvider> component with children in it...
 */
function QuizContextProvider({children}) {

    const [{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining
    }, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then(response => response.json())
            .then(data => dispatch({type: 'dataReceived', payload: data}))
            .catch(error => dispatch({type: 'dataFailed'}));
    }, []);

    return (
        <QuizContext.Provider value={{
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
            dispatch,
            numQuestions,
            maxPossiblePoints
        }}>
            {children}
        </QuizContext.Provider>
    );
}

/**
 * Custom hook to return QuizContext
 * @returns The context `QuizContext`
 * @throws Error if context is used outside the context provider component
 */
function useQuiz() {
    const context = useContext(QuizContext);

    // check if the context is null or undefined, that means we are using context outside the context basically
    if (context === undefined) {
        throw new Error("Oops! using context outside the accessible are is not allowed ;) ")
    }

    // return context if all good
    return context;
}

export {QuizContextProvider, useQuiz};