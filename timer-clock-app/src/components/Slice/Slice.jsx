import React from "react";
import Lslide from './Lslide/Lslide'
import './slice.css';
import Rslide from "./Rslide/Rslide";
const Slice = ()=>{
    return <>
    <div className="aApp">
        <div className="rSlide">
            <Rslide />
        </div>
        <div className="lSlide">
            <Lslide />
        </div>
    </div>
    </>;
}
export default Slice;