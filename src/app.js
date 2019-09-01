import React from 'react';
import ReactDOM from 'react-dom';

//const MyApp = React.createElement('p',{}, 'THIS IS JSX');
const MyApp = <p>THIS IS JSX</p>;
ReactDOM.render(MyApp, document.getElementById('app'));