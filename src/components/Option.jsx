import React from 'react';

const Option = (props) => (
    <div>
        <p>{props.task}</p>
        <button
            onClick={(e) => props.handleDeleteSingleOption(props.task)}>
            Remove
        </button>
    </div>
);
export default Option;