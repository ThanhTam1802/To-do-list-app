console.log("app.js is running")

//JSX - Javascript XML

const app = {
    name: 'TO DO LIST APP',
    subtitle: 'This is a simple app',
    option: []
};

const addTask = (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value;
    if (task) {
        app.option.push(task);
        e.target.elements.task.value = '';
    }
    reRender();
}

const removeAll = (e) => {
    e.preventDefault();
    app.option = [];

    reRender();
};
const pickRandomTask = () => {
    const rndNumber = Math.floor(Math.random() * app.option.length);
    const rndTask = app.option[rndNumber];
    alert(rndTask);
};

const reRender = () => {
    const myApp = (
        <div>
            <h2>{app.name}</h2>
            <h3>{app.subtitle}</h3>
            <p>{app.option ? 'List of work to do:' : ''}</p>
            <p>{app.option.length}</p>
            <button disabled={app.option.length === 0} onClick={pickRandomTask}>pick me one task !</button>
            <button onClick={removeAll}>Remove all</button>
            <ul>
                {app.option.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
            <form onSubmit={addTask}>
                <input type='text' name='task'></input>
                <button>Add task</button>
            </form>
        </div>
    );
    ReactDOM.render(myApp, appRoot);
};

const appRoot = document.getElementById('app');
// ReactDOM.render(myApp, appRoot);

reRender();



