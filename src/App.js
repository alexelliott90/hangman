import logo from './logo.svg';
import './App.css';
import WordGenerator from './components/WordGen';
import WordDisplay from './components/WordDisplay';
import InputLetter from './components/InputLetter';
import GuessedLettersDisplay from './components/GuessedLettersDisplay';
import HangmanImage from './components/HangmanImage';
import HelpPopUp from './components/HelpPopUp';
import {React, useState} from "react";

function App() {
  const [buttonPopUp, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <div className='row mt-3'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-2'>
          <WordGenerator/>
        </div>
        <div className='col-md-8'>
          <WordDisplay/>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <InputLetter/>
        </div>
        <div className='col-md-4'>
          <GuessedLettersDisplay/>
        </div>
        <div className='col-md-4'>
          <HangmanImage/>
        </div>
      </div>
      <button onClick={() => setButtonPopup(true)}>Help</button>
      <HelpPopUp trigger={buttonPopUp} setTrigger={setButtonPopup}/>
    </div>
  );
}

export default App;
