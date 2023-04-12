import {React, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {inputLetter, guessLetter} from '../store/words'
import WordDisplay from "./WordDisplay";

function InputLetter(){
    const dispatch = useDispatch();
    const lastLetter = useSelector((state) => state.words.lastGuessedLetter)
    const formRef = useRef()

    const handleClick = (e) => {
        e.preventDefault() 
        dispatch(guessLetter(lastLetter))
        //reset the form to allow user to input new letter
        formRef.current.reset()
    }
    
    return(
        <div>
            <form ref={formRef}>
                <input 
                maxLength="1"
                placeholder="Guess a letter"    
                onChange={(e) => (dispatch(inputLetter([e.target.value])))}/>
                <button variant="primary" size="lg" onClick={handleClick}>Guess Letter</button>
            </form>
        </div>
    )
}

export default InputLetter