import React from "react";

function MultiCard(props){

    const question = props.questionData;
    const choices = ["a", "b", "c", "d"];

    const options = question.options.map((index, option) => {
        return (
            <li key={index}>
                {choices[index]}. {option}
            </li>
        )
    })

    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];

    return(
        <>
            <div className="card-back">
                {question.service}
            </div>
            <ul className="multi">
                {options}
            </ul>
            <div className="card-front">
                {answerLetter}. {question.answer}
            </div>
        </>
    )
}

export default MultiCard;