import './lSlide.css'
const Lslide = ()=>{
    return <>
    <div className="wrapperLs">
        <div className="clock">
            <div id="time">
                <div className="circle" >
                    <div className="dots sec_dot"></div>
                        <svg>
                            <circle cx="120" cy="120" r="120" id="ss">     
                            </circle>
                        </svg>       
                </div>
                <div className="circle" >
                    <div className="dots min_dot"></div>
                        <svg>
                            <circle cx="100" cy="100" r="100" id="mm">     
                            </circle>
                        </svg>       
                </div>
                <div className="circle" >
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