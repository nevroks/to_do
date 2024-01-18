import React, {useEffect, useState} from 'react';
import MyButton from "../../components/UI/Button/myButton";
import '../../components/styles/Pages/timerPage.css'
const TimerPage = () => {
    let [minutes,setMinutes]=useState(0)
    let [milliseconds,setMilliseconds]=useState(0)
    let [seconds,setSeconds]=useState(0)
    let timer;
    const startTimer=()=>{
        setMilliseconds(milliseconds++)

        if(milliseconds>99){
            setSeconds(seconds=seconds+1)
            setMilliseconds(milliseconds=0)
        }
        if(seconds>59){
            setSeconds(seconds=0)
            setMinutes(minutes=minutes+1)
        }
    }


    const stopTimer=()=>{
        clearInterval(timer)
    }
    const resetTimer=()=>{
        clearInterval(timer)
        setMinutes(minutes=0)
        setSeconds(seconds=0)
        setMilliseconds(milliseconds=0)
    }



    return (
        <div className={'TimerPage'}>
            <div className={'TimerPage__counter'}>
                <div className={'TimerPage__counter--numbers'}>
                    {/*<p>{hours}</p>*/}
                    <p>{minutes<10?'0'+minutes:minutes}</p>
                    <p>{seconds<10?'0'+seconds:seconds}</p>
                    <p>{milliseconds<10?'0'+milliseconds:milliseconds}</p>
                </div>
                <div>
                    <MyButton onClick={()=>{setInterval(startTimer,10)}}>Start</MyButton>
                    <MyButton onClick={()=>{stopTimer()}}>Stop</MyButton>
                    <MyButton onClick={()=>{resetTimer()}}>Reset</MyButton>
                </div>
            </div>
        </div>
    );
};

export default TimerPage;