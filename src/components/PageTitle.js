import {React} from "react";
import { useSelector} from "react-redux"

//function to display the title for the page, feedback on the user's letter guesses, 
//and a win or loss message when needed

function TitleSection(){
    const incorrectOrCorrect = useSelector((state) => state.words.incorrectOrCorrect)
    const winLoseMessage = useSelector((state) => state.words.winLoseMessage)
    const messageClass = useSelector((state) => state.words.feedbackMessageClass)
    const pageTitle = useSelector((state) => state.words.pageTitle)
    const pageTitleClass = useSelector((state) => state.words.pageTitleClass)
    const startMessage = useSelector((state) => state.words.startMessage)

        return(
            <div className="TitleSection">
                    <h1 className={pageTitleClass}>{pageTitle}</h1>
                    <h4 className={pageTitleClass}>{startMessage}</h4>
                    <h1 className={messageClass}>{incorrectOrCorrect}{winLoseMessage}</h1>
            </div>
    )
}

export default TitleSection