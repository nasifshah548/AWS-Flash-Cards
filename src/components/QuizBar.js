import React from "react";
import QuizType from "./QuizType";

// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icon
// npm i --save@fortawesome/react-fontawesome 


function QuizBar(props) {

    // Array of Objects

    const quizArray = [
        {icon: "dice", type: "Random"},
        {icon: "file-alt", type: "Regular"},
        {icon: "dumbbell", type: "Weighted"},
        {icon: "font", type: "Multi"},
    ]

    // The QuizType Component is being traversed through the quizArray

    const quizTypes = quizArray.map((x, index) => { 
        return (
            <QuizType key={index} icon={x.icon} quizType={x.type} userChoice={props.userChoice} />
        )
    })

    return(
        <div className="quiz-bar">
            <h1>Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
                {quizTypes}
            </ul>
        </div>
    )
}

export default QuizBar;