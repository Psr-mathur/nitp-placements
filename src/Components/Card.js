import React from "react";
export default function Card(props) {
    // props=props.item;
    // console.log(props);
    return (
        <div className="col col-xl-4 col-lg-6 mb-2">
            <div className="header">
                <div className="nitp"><b>National Institute of Technology, Patna</b></div>
                <div className="profile">
                    <div className="profile-img">
                        <img className="dp" src={props.dp} alt="profilepic" />
                    </div>
                    <div className="profile-details">
                        <div className="name"><span>{props.name}</span></div>
                        <div className="roll"><span>{props.roll}</span></div>
                    </div>
                </div>
                <div className="branch">{props.branch} {props.batch}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    );
}
