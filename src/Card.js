import React from "react";

const Card = (props) => {
    const {name,email}= props;
    return (

        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
            <img alt='robot' src="https://robohash.org/shahd" />
            <div>
                <h2>{name}</h2>
                <p> {email}</p>
            </div>
        </div>

    );
}
export default Card;