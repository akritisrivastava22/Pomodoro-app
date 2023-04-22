import { useState } from "react";
import React from "react";

const Tags = () => {
  const [myInterval, setMyInterval] = useState(0); 
  const [timer, setTimer] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  function handleTimer(seconds) {
    setTimer(seconds);
    setIsTimerRunning(true);
    if (timer === 0) {
        
        clearInterval(myInterval);
        return ;
    }
   let newInterval = setInterval(() => {
        seconds--;
        setTimer(seconds);
      }, 1000);
      setMyInterval(newInterval);
  }
  function time() {
    let min = parseInt(timer / 60);
    let sec = timer % 60;
    let temp = "";
    if (min < 10) {
      temp = "0" + min;
    } else {
      temp = temp + min;
    }
    temp += ":";
    if (sec < 10) {
      temp += "0" + sec;
    } else {
      temp = temp + sec;
    }
    if (isNaN(min)){
        temp= "00:00";
    }
    if (sec < 0){
        temp = "00:00";
    }
    return temp;
  }

    function handleReset(){
        setIsTimerRunning(false);
        clearInterval(myInterval);
        setTimer(null);
    }

    function handlePause(){
        clearInterval(myInterval);
        setIsPause(true);
        if (isPause) {
            handleTimer(timer);
            setIsPause(false);
        }
    }
  return (
    <div>
      <div className="mt-8 md:mt-12 md:text-4xl my-20 mx-20 text-3xl text-white rounded-full md:rounded-none text-center py-20 border-solid border-2 border-purple-900">
        {time()}
      </div>
      <div className="text-center mt-6 ">
      { isTimerRunning ? 
        (<>
    <button className="md:px-20 md:text-2xl text-blue-500 bg-white rounded-lg px-8 font-bold text-xl py-1  hover:bg-purple-900 hover:text-white " onClick={handlePause}>{isPause ? "Start" : "Pause"}</button>
    <button className="md:px-20 md:text-2xl text-blue-500 bg-white rounded-lg px-10 font-bold text-xl py-1  ml-3 hover:bg-purple-900 hover:text-white " onClick={handleReset}>Reset</button>
    </>) :
       ( <> 
       <div className="mx-5">
    <button
          onClick={() => {
            handleTimer(1500);
          }}
          className="md:px-20 md:text-2xl text-blue-500 bg-white rounded-lg px-12 font-bold text-xl py-1 hover:bg-purple-900 hover:text-white "
        >
          Work
        </button>
        <button
          onClick={() => {
            handleTimer(30);
          }}
          className="md:px-20 md:text-2xl text-blue-500 bg-white ml-4 rounded-lg font-bold py-1 text-xl px-6 hover:bg-purple-900 hover:text-white "
        >
          Short Break
        </button>
        <button
          onClick={() => {
            handleTimer(900);
          }}
          className="md:px-20 md:text-2xl text-blue-500 bg-white ml-2 rounded-lg font-bold px-6 py-1 text-xl mt-2 hover:bg-purple-900 hover:text-white "
        >
          Long Break
        </button>
        </div>
  </>)}
    </div>
    </div>
  );
};

export default Tags;
