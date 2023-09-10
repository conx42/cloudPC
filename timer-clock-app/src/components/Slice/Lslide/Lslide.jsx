import { useEffect } from 'react';
import './lSlide.css'
const Lslide = () => {

    useEffect(() => {
        setInterval(()=>{
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            hh.style.strokeDashoffset = 510 - (510 * h) / 12;
            // 12 hrs clock
            mm.style.strokeDashoffset = 630 - (630 * m) / 60;
            // 60 minutes
            ss.style.strokeDashoffset = 760 - (760 * s) / 60;
            // 60 seconds
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
                </div>
            </div>
        </div>
    </>;
}
export default Lslide;