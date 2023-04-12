import {React, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

//function to generate a random word
function WordDisplay(){
    const dispatch = useDispatch();
    const wordToDisplay = useSelector((state) => state.words.wordProgress)
    const wordKeys = Object.keys(wordToDisplay)

    const displayWords = wordKeys.map((number) =>
            <div className="Letter" key={number.toString()}>
                <h1>{wordToDisplay[number]}</h1>
            </div>
    )

        return(
            <div className="DisplayWordSection">
                    {displayWords}
            </div>
    )
}

export default WordDisplay