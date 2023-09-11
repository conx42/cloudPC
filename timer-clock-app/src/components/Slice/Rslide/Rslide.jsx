import { useEffect } from 'react';
import './rss.css';
const Rslide = () => {
    useEffect(() => {
        const playButton = document.getElementsByClassName("play")[0];
        const lapButton = document.getElementsByClassName("lap")[0];
        const resetButton = document.getElementsByClassName("reset")[0];
        const second = document.getElementsByClassName("sec")[0];
        const centiSecond = document.getElementsByClassName("msec")[0];
        const minute = document.getElementsByClassName("minute")[0];

        let isPlay = true;
        let secCounter = 0;
        let sec;
        let min;
        let centiSec;
        let centiCounter=0;
        let minCounter=0;
        let isReset=true;
        

        const toggleButton = () => {
            lapButton.classList.remove("display-none");
            resetButton.classList.remove("display-none");
        }

        const play = () => {
            console.log("Inside Play()");
            console.log("isReset: "+isReset);
            console.log("isPlay: "+isPlay);
            if (isPlay && isReset) {
                playButton.innerHTML = 'Pause';
                sec = setInterval(() => {
                    if(secCounter===60){
                        secCounter=0;
                    }
                    second.innerHTML = `&nbsp;${secCounter++} : `;
                }, 1000)
                centiSec = setInterval(() => {
                    if(centiCounter===100){
                        centiCounter=0;
                    }
                    centiSecond.innerHTML = `&nbsp;${++centiCounter}`;
                }, 10)
                min = setInterval(() => {
                    minute.innerHTML = `${++minCounter} :;`;
                }, 60*1000)
                isPlay = false;
                isReset = false;
            } else {
                playButton.innerHTML = 'Play';
                clearInterval(sec);
                clearInterval(min);
                clearInterval(centiSec);
                isPlay = true;
                isReset = true;
            }
            toggleButton();
        }
        // const playSec = () => {
        //     setInterval(() => {
        //         second.innerHTML = sec++;
        //     }, 1000)
        // }
        const reset = () => {
            isReset=true;
            if(!isPlay){
                play();
            }
            console.log("INSIDE RESET");
            lapButton.classList.add('display-none');
            resetButton.classList.add('display-none');
            second.innerHTML = '0 :';
            centiSecond.innerHTML = '0';
            minute.innerHTML = '0 :';
        }

        playButton.addEventListener("click", play);
        resetButton.addEventListener("click", reset);
    }, [])
    return <>
        <div className="Container">
            <div className="watch">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <span className="text minute">0 :</span>
                        <span className="text sec">&nbsp;0 :</span>
                        <span className="text msec">&nbsp;0</span>
                    </div>
                </div>
            </div>
            <div className='button-wrapper'>
                <button className='button reset display-none'>Reset</button>
                <button className='button play'>Play</button>
                <button className='button lap display-none'>Lap</button>
            </div>
            <ul className="laps">
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <li className='lap-item'>
                    <span className='number'>#1</span>
                    <span className='time-stamp'>01 : 43 : 07</span>
                </li>
                <button className='lap-clear-button'>
                    Clear All
                </button>
            </ul>
        </div>
    </>;
}
export default Rslide;