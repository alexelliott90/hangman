import {React, useRef} from "react";
import { useSelector, useDispatch } from "react-redux"
import {inputLetter, guessLetter, resetMessage} from '../store/words'

//function for the input section where the user inputs the letters they guess
//returns an input section and a button linked to the handleclick function which
//dispatches the letter to the inputLetter function in the words reducer

function InputLetter(){
    const dispatch = useDispatch();
    const lastLetter = useSelector((state) => state.words.lastGuessedLetter)
    const inputLetterClass = useSelector((state) => state.words.inputLetterSectionClass)
    const formRef = useRef()

    const handleClick = (e) => {
        e.preventDefault() 
        //dispatch the guessed letter to the guessLetter function in the words reducer
        //the value is taken from a state called lastLetter which contains the last letter inout into the form
        dispatch(guessLetter(lastLetter))
        
        //reset the message saying whether the guess was incorrect or correct after set time
        setTimeout(() => {
            dispatch(resetMessage())
        }, 3000)
        
        //reset the form to allow user to input new letter
        formRef.current.reset()
    }
    
    return(
        <div className="InputLetterSection">
            <div className={inputLetterClass}>
                <form ref={formRef}>
                    <input
                    class = "HangmanInput" 
                    maxLength="1"
                    placeholder="Guess a letter"    
                    onChange={(e) => (dispatch(inputLetter([e.target.value])))}/>
                    <button className="StartButton" variant="primary" size="lg" onClick={handleClick}>Guess Letter</button>
                </form>
            </div>
        </div>
    )
}

export default InputLetter