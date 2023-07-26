import logo from './logo.svg';
import React from 'react';

import './App.css';

let state = {
  number: 5,
  num: 25,
  timingType: 'SESSION',
  timeLeft: 1500,
  play: false
};


const timeFormatter = () => {
  const minutes = Math.floor(state.timeLeft / 60);
  const seconds = state.timeLeft - minutes * 60;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedMinutes}:${formattedSeconds}`;
};

const title = state.timingType === 'SESSION' ? 'Session' : 'Break';

const handlebreakincrease = () => {
  if(state.number < 60) {
    let arr = [];
    arr.push(state.number);
    state.number = arr[0] + 1;
    document.getElementById('break-length').innerHTML = state.number;
  }
}

const handlebreakdecrease = () => {
  if(state.number > 1){
    let arr = [];
    arr.push(state.number);
    state.number = arr[0] - 1;
    document.getElementById('break-length').innerHTML = state.number;
  }
}

const handlesessionincrease = () => {
  if(state.num < 60) {
    let arr = [];
    arr.push(state.num);
    state.num = arr[0] + 1;
    document.getElementById('session-length').innerHTML = state.num;
  }
}

const handlesessiondecrease = () => {
  if(state.num > 1){
    let arr = [];
    arr.push(state.num);
    state.num = arr[0] - 1;
    document.getElementById('session-length').innerHTML = state.num;
  }
}

const handlePlay = () => {
 /* clearTimeout(timeout);
  setPlay(!play);*/
}

const App = () => {
  
    return ( 
    <div>
      <div className='wrapper'>
        <h2>25 + 5 Clock</h2>
        <div className='break-session-length'>
          <div>
            <h3 id='break-label'>Break Length</h3>
            <div className='container'>
              <button disabled={state.play} onClick={handlebreakincrease} id='break-increment'>Increase</button>
                <div id='break-length'>{state.number}</div>
              <button disabled={state.play} onClick={handlebreakdecrease}id='break-decrement'>Decrease</button>
            </div>
          </div>
          <div>
            <h3 id='session-label'>Session Length</h3>
            <div className='sub-container'>
              <button disabled={state.play} onClick={handlesessionincrease} id='session-increment'>Increase</button>
                <div id='session-length'>{state.num}</div>
              <button disabled={state.play} onClick={handlesessiondecrease} id='session-decrement'>Decrease</button>
            </div>
          </div>
        </div>
        <div className='timer-wrapper'>
          <div className='timer'>
            <h2 id='timer-label'>{title}</h2>
            <h3 id='time-left'>{timeFormatter()}</h3>
          </div>
          <button onClick={handlePlay} id='start_stop'>Start/Stop</button>
          <button  id='reset'>Reset</button>
        </div>
      </div>
      <audio
        id='beep'
        preload='auto'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      />
    </div>
  );
}

export default App;
