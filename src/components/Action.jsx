import React from 'react';

const Action = (props) => (
    <div>
        <p>This is your task</p>
        <button onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?</button>
    </div>
);
export default Action;