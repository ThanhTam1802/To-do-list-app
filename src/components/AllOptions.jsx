import React from 'react';
import Option from './Option.jsx';

const AllOptions = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    <p>Number of tasks: {props.options.length}</p>
    {
      props.options.map((item) => {
        return (
          <Option key={item} task={item}
            handleDeleteSingleOption={props.handleDeleteSingleOption} />
        )
      })
    }
  </div>
);
export default AllOptions;