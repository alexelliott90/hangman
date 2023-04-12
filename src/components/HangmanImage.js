import {React} from "react";
import { useSelector, useDispatch } from "react-redux"

//function to generate a random word
function HangmanImage(){
    const dispatch = useDispatch();
    //retrieve number of incorrect guesses from words store
    const hangmanStatus = useSelector((state) => state.words.incorrectGuesses)
    //retrieve array of hangman images from images store
    let hangmanImage = useSelector((state) => state.images.hangmanImages)
    //retrieve classes which will display the image and message when user inputs a letter
    let hangmanImageClass = useSelector((state) => state.words.hangmanImageClass)
    let hangmanWordClass = useSelector((state) => state.words.hangmanMessageClass)

        return(
            <div className="HangmanImageSection">
                    <h2 className={hangmanWordClass}>Incorrect guesses so far: {hangmanStatus}</h2>
                    <img className={hangmanImageClass} src={hangmanImage[hangmanStatus]} alt="Hangman Image"></img>
            </div>
    )
}

export default HangmanImage