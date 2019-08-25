let visible = false;

const popup = () =>{
    visible = !visible;
    reRdender();
};

const reRdender = () => {
    const myApp = (
        <div>
            <h1>This is visible button !</h1>
            <button onClick={popup}> {visible ? "Hide content" : "Show content"} </button>
            {visible && (
                <div>
                    <p>This is the content ~</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(myApp, appRoot);
};
const appRoot = document.getElementById('app');

reRdender();