import React from "react";
export default function Card(props) {
    // props=props.item;
    // console.log(props);
    return (
        <div className="header">
            <p className="nitp"><b>National Institute of Technology, Patna</b></p>
            <div className="profile">
                <div className="profile-img">
                    <img className="dp" src={props.dp} alt="profilepic"/>
                </div>
                <div className="profile-details">
                    <p className="name">{props.name}</p>
                    <hr />
                    <p className="roll">{props.roll}</p>
                </div>
            </div>
            <p className="branch">{props.branch} {props.batch}</p>
            <hr />
            <p className="company">{props.company}</p>
        </div>
    );
}
