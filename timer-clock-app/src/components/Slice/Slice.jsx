import React from "react";
import Lslide from './Lslide/Lslide'
import './slice.css';
const Slice = ()=>{
    return <>
    <div className="aApp">
        <div className="lSlide">
            <Lslide />
        </div>
        <div className="rSlide"></div>
    </div>
    </>;
}
export default Slice;