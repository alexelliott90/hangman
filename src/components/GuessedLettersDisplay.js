import {React, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

//function to generate a random word
function GuessedLettersDisplay(){
    const dispatch = useDispatch();
    const lettersToDisplay = useSelector((state) => state.words.guessedLetters)
    const letterKeys = Object.keys(lettersToDisplay)
    const messageClass = useSelector((state) => state.words.guessedLetterClass)

    console.log(messageClass)

    const displayLetters = letterKeys.map((number) =>
            <div className="GuessedLetter" key={number.toString()}>
                <h1>{lettersToDisplay[number]}</h1>
            </div>
    )

        return(
            <div className="DisplayWordSection">
                    <h2 className={messageClass}>Letters guessed so far:</h2>
                    {displayLetters}
            </div>
    )
}

export default GuessedLettersDisplay