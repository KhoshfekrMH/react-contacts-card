import React from "react"
import Avatar from "./Avatar"

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                </div>
                <Avatar img={props.imgURL} />
                <div className="bottom">
                    <p className="info">{props.phone}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;