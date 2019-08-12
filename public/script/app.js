'use strict';

console.log("app.js is running");

//JSX - Javascript XML

var app = {
    name: 'To do list app',
    subtitle: 'This is a simple app',
    option: ['one', 'two']
};

var myApp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.name
    ),
    React.createElement(
        'h3',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.option ? 'List of work to do:' : ''
    ),
    React.createElement(
        'ul',
        null,
        app.option.map(function (item) {
            return React.createElement(
                'li',
                null,
                item
            );
        })
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(myApp, appRoot);
