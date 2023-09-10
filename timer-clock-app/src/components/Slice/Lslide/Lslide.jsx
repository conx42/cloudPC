import { useEffect } from 'react';
import './lSlide.css'
const Lslide = () => {

    useEffect(() => {
        setInterval(()=>{
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');
            let sec_dot = document.querySelector('.sec_dot');
            let min_dot = document.querySelector('.min_dot');
            let hr_dot = document.querySelector('.hr_dot');
            let hr = document.getElementById('hr');
            let mn = document.getElementById('mn');
            let sc = document.getElementById('sc');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            hh.style.strokeDashoffset = 510 - (510 * h) / 12;
            // 12 hrs clock
            mm.style.strokeDashoffset = 630 - (630 * m) / 60;
            // 60 minutes
            ss.style.strokeDashoffset = 760 - (760 * s) / 60;
            // 60 seconds
            
            sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
            // 360 / 60seconds = 6
            min_dot.style.transform = `rotateZ(${m * 6}deg)`;
            // 360 / 60minutes = 6
            hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
            // 360 / 12hrs = 30

            hr.style.transform = `rotateZ(${h * 30}deg)`;
            mn.style.transform = `rotateZ(${m * 6}deg)`;
            sc.style.transform = `rotateZ(${s * 6}deg)`;

        })
    }, []);
    return <>
        <div className="wrapperLs">
            <div className="clock">
                <div id="time">
                    <div className="circle" style={{ '--clr': '#ff2972' }}>
                        <div className="dots sec_dot"></div>
                        <svg>
                            <circle cx="120" cy="120" r="120" id="ss">
                            </circle>
                        </svg>
                    </div>
                    <div className="circle" style={{ '--clr': '#fee800' }}>
                        <div className="dots min_dot"></div>
                        <svg>
                            <circle cx="100" cy="100" r="100" id="mm">
                            </circle>
                        </svg>
                    </div>
                    <div className="circle" style={{ '--clr': '#04fc43' }}>
                        <div className="dots hr_dot"></div>
                        <svg>
                            <circle cx="80" cy="80" r="80" id="hh">
                            </circle>
                        </svg>
                    </div>

                    <div className="niddles" style={{'--clr2':'#ff2972'}} id='sc'><i></i></div>
                    <div className="niddles niddle2" style={{'--clr2':'#fee800'}} id='mn'><i></i></div>
                    <div className="niddles niddles3" style={{'--clr2':'#04fc43'}} id='hr'><i></i></div>

                    <span style={{'--i':'1'}}><b>1</b></span>
                    <span style={{'--i':'2'}}><b>2</b></span>
                    <span style={{'--i':'3'}}><b>3</b></span>
                    <span style={{'--i':'4'}}><b>4</b></span>
                    <span style={{'--i':'5'}}><b>5</b></span>
                    <span style={{'--i':'6'}}><b>6</b></span>
                    <span style={{'--i':'7'}}><b>7</b></span>
                    <span style={{'--i':'8'}}><b>8</b></span>
                    <span style={{'--i':'9'}}><b>9</b></span>
                    <span style={{'--i':'10'}}><b>10</b></span>
                    <span style={{'--i':'11'}}><b>11</b></span>
                    <span style={{'--i':'12'}}><b>12</b></span>

                </div>
            </div>
        </div>
    </>;
}
export default Lslide;