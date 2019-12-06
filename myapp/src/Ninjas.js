import React from 'react';

function Ninjas(props) {
    const { name, age, belt } = props;
    return (
        <div className="ninja">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt: {belt}</div>
        </div>
    );
}

export default Ninjas;
