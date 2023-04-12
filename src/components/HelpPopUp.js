import React from "react";

//function to create a popup with help for the user, explaining the rules of the game
function HelpPopUp(props) {
    return (props.trigger) ? (
        <div className="HelpPopUp">
            <div className="HelpPopUpInner">
                <button className="CloseButton" onClick={() => props.setTrigger(false)}>Close Help</button>
                <h3 className="HelpTitle">How to Play Hangman</h3>
                    <h3 className="HelpTitle2">Start Playing</h3>
                        <ul className="HelpText">
                        <li>To start the game, press the start button</li>
                        <li>If you are already playing a game, and want to restart, press the restart button</li>
                        </ul>
                    <h3 className="HelpTitle2">The Rules</h3>
                        <ul className="HelpText">
                            <li>When you start the game, a random word will be generated, and it will be displayed with blanked out letters</li>
                            <li>You need to guess the letters of the word, one at a time</li>
                            <li>If you make a wrong guess, then the hangman picture will start to be drawn</li>
                            <li>You are allowed 9 wrong guesses. On the 10th wrong guess, the picture will be complete and you will lose!</li>
                            <li>If you manage to guess the word without making 10 wrong guesses, then you will win!</li>
                        </ul>
                            
            </div>
        </div>
    ) : "";
}

export default HelpPopUp