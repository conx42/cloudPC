import './rss.css';
const Rslide = ()=>{
    return <>
    <div className="Container">
        <div className="watch">
            <div className="outer-circle">
                <div className="inner-circle">
                    <span className="text minute">01 :</span>
                    <span className="text sec">&nbsp;47 :</span>
                    <span className="text msec">&nbsp;97</span>
                </div>
            </div>
        </div>
        <div className='button-wrapper'>
            <button className='button'>Reset</button>
            <button className='button'>Play</button>
            <button className='button'>Lap</button>
        </div>
        <div className="laps"></div>
    </div>
    </>;
}
export default Rslide;