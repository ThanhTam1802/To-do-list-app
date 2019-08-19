'use strict';

console.log("app.js is running");

//JSX - Javascript XML

var app = {
    name: 'TO DO LIST APP',
    subtitle: 'This is a simple app',
    option: []
};

var addTask = function addTask(e) {
    e.preventDefault();

    var task = e.target.elements.task.value;
    if (task) {
        app.option.push(task);
        e.target.elements.task.value = '';
    }
    reRender();
};
var removeAll = function removeAll(e) {
    e.preventDefault();
    app.option = [];

    reRender();
};

var reRender = function reRender() {
    var myApp = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
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
            'p',
            null,
            app.option.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
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
        ),
        React.createElement(
            'form',
            { onSubmit: addTask },
            React.createElement('input', { type: 'text', name: 'task' }),
            React.createElement(
                'button',
                null,
                'Add task'
            )
        )
    );
    ReactDOM.render(myApp, appRoot);
};

var appRoot = document.getElementById('app');
// ReactDOM.render(myApp, appRoot);

reRender();
