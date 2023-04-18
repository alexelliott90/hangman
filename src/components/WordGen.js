import {React, useState} from "react";
import { useDispatch } from "react-redux"
import {newWord} from '../store/words'

//function to generate a random word
function WordGenerator(){
    const [buttonText, setButtonText] = useState("Start")
    const dispatch = useDispatch();
    
    //function to call API and generate a random word, which is then stored in the words slice
    const handleClick = async(e) => {
            e.preventDefault()  
            let response = await fetch(`https://random-word-api.herokuapp.com/word`);
            let data = await response.json();
            dispatch(newWord(data))
            setButtonText("Restart")       
            } 

        return(
            <div className="WordGenSection">
                <form>
                    <button className="StartButton" variant="primary" size="lg" onClick={handleClick}>{buttonText}</button>
                </form>
            </div>
    )
}

export default WordGenerator