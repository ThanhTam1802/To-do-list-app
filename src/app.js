console.log("app.js is running")

//JSX - Javascript XML

const app = {
    name: 'To do list app',
    subtitle: 'This is a simple app',
    option: ['one', 'two']
};

var myApp = (
    <div>
        <h1>{app.name}</h1>
        <h3>{app.subtitle}</h3>
        <p>{app.option ? 'List of work to do:': ''}</p>
        <ul>
            {app.option.map((item) =>{
                return <li>{item}</li>
            })}
        </ul>
    </div>

);


var appRoot = document.getElementById('app');
ReactDOM.render(myApp, appRoot);