import './App.css';
import WordGenerator from './components/WordGen';
import WordDisplay from './components/WordDisplay';
import InputLetter from './components/InputLetter';
import GuessedLettersDisplay from './components/GuessedLettersDisplay';
import HangmanImage from './components/HangmanImage';
import HelpPopUp from './components/HelpPopUp';
import {React, useState} from "react";
import TitleSection from './components/PageTitle';

function App() {
  const [buttonPopUp, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <div className='row'>  
        <TitleSection/>
      </div>
      <div className='row mb-2'>
        <WordGenerator/>
      </div>
      <div className='row mb-2'>
        <InputLetter/>
      </div>
      <div className='row mt-3'>
          <WordDisplay/>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
        </div>
        <div className='col-md-4'>
          <HangmanImage/>
        </div>
        <div className='col-md-4'>
          <GuessedLettersDisplay/>
        </div>
      </div>
      <div>
        <button className='HelpButton' onClick={() => setButtonPopup(true)}>Help</button>
        <HelpPopUp trigger={buttonPopUp} setTrigger={setButtonPopup}/>
      </div>
    </div>
  );
}

export default App;
