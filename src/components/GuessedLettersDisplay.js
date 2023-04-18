import {React} from "react";
import { useSelector} from "react-redux"

//function to generate a random word
function GuessedLettersDisplay(){
    const lettersToDisplay = useSelector((state) => state.words.guessedLetters)
    const letterKeys = Object.keys(lettersToDisplay)
    
    //retrieve number of incorrect guesses from words store and class to determine whether to display or not
    const hangmanStatus = useSelector((state) => state.words.incorrectGuesses)
    const hangmanMessageClass = useSelector((state) => state.words.hangmanMessageClass)

    const displayLetters = letterKeys.map((number) =>
            <div className="GuessedLetterOuter" key={number.toString()}>
                <h1 className="LetterSectionInner">{lettersToDisplay[number]}</h1>
            </div>
    )

        return(
            <div className="GuessLetterSection">
                <div className="row mt-1">
                    <h2 className={hangmanMessageClass}>Incorrect guesses so far: {hangmanStatus}</h2>
                </div>
                {displayLetters}
            </div>
    )
}

export default GuessedLettersDisplay