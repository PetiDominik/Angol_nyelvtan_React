
import "./Form.css";

import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import React, { useState } from "react";

let tryCount = 0;

export default function Form(props) {
    let questionDatas = props.question;
    const [isAnswerCorrect, setAnswerCorrect] = useState(false);

    console.log(isAnswerCorrect);
    function checkAnswerIsCorrect(answer) {
        tryCount++;
        if (answer === questionDatas.correctAnswer) {
            setAnswerCorrect(true);
        } else {
            setAnswerCorrect(false);
        }
    }

    function nextQuestion() {
        document.getElementById("dropDwn").value="";
        setAnswerCorrect(false);

        props.correctAnswerSubmitFn(tryCount);
        tryCount = 0;
    }

    let splitText = questionDatas.sentence.split("_");

    return (
        <div>
            {<p>{splitText[0]}{<Dropdown options={questionDatas.options} submitFn={checkAnswerIsCorrect} />}{splitText[1]} ({questionDatas.default})</p>}
            {<Button onSubmit={nextQuestion} visible={isAnswerCorrect}/>}
        </div>
    )
}