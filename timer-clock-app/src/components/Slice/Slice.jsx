import React from "react";
import Lslide from './Lslide/Lslide'
import './slice.css';
const Slice = ()=>{
    return <>
    <div className="aApp">
        <div className="rSlide"></div>
        <div className="lSlide">
            <Lslide />
        </div>
    </div>
    </>;
}
export default Slice;