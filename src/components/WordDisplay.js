import {React} from "react";
import { useSelector} from "react-redux"

//function to display the current status of the user's guesses
//displays boxes containing stars in place of the letters at the start, and will
//fill in with correct letters as the user guesses correctly

function WordDisplay(){
    const wordToDisplay = useSelector((state) => state.words.wordProgress)
    const wordKeys = Object.keys(wordToDisplay)
    const letterClass = useSelector((state) => state.words.displayWordClass)

    const displayWords = wordKeys.map((number) =>
            <div className={letterClass} key={number.toString()}>
                <h1 className="LetterSectionInner">{wordToDisplay[number]}</h1>
            </div>
    )

        return(
            <div className="DisplayWordSection">
                    {displayWords}
            </div>
    )
}

export default WordDisplay