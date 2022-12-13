import React from "react"

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2>{props.name}</h2>
                    <img
                        src={props.url}
                        alt="avatar-pic"
                    />
                </div>
                <div className="bottom">
                    <p>{props.tel}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;