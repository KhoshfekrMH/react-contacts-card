import react from "React";
import React from "react";

function Avatar(props) {
    return(
        <img className="circle-img"
             src={props.img}
             alt="avatar-pic"
        />
    );
}

export default Avatar;