import {React} from "react";
import { useSelector} from "react-redux"

//function to display the relevant hangman image, using the hangman status state to determine which image
//uses data in the images reducer to find the source of the relevant image

function HangmanImage(){
    //retrieve array of hangman images from images store
    let hangmanImage = useSelector((state) => state.images.hangmanImages)
    //retrieve classes which will display the image and message when user inputs a letter
    let hangmanImageClass = useSelector((state) => state.words.hangmanImageClass)
    //retrieve number of incorrect guesses from words store (determines which image to display)
    const hangmanStatus = useSelector((state) => state.words.incorrectGuesses)
    
        return(
            <div className="HangmanImageSection">
                    <img className={hangmanImageClass} src={hangmanImage[hangmanStatus]} alt="Hangman"></img>
            </div>
    )
}

export default HangmanImage