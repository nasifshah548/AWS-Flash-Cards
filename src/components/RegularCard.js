import React from "react";

function RegularCard(props){
    const question = props.questionData;
    return(
        <>
            <div className="card-back">
                {question.service}
            </div>
            <div className="card-front">
                <div>{question.desc}</div>
                <div>{question.cat}</div>
            </div>
        </>
    )
}

export default RegularCard;