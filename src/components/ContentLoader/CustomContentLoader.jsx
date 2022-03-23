import React from "react";
import { SpinnerCircularSplit } from 'spinners-react';
import "./CustomContentLoader.css";

const CustomContentLoader = () =>{

    return(
        <>
            <div className="content-loader">
                <SpinnerCircularSplit
                    size={90}
                    thickness={97}
                    speed={152}
                    color="rgba(0, 57, 117, 1)"
                    secondaryColor="rgba(115, 118, 135, 0.3)"
                />
            </div>
        </>
    )
}
export default CustomContentLoader;