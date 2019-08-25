class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Help you know that to do !</h2>
      </div>
    )
  };
};

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>This is your task</p>
      </div>
    )
  };
};

class AllOptions extends React.Component {
  render() {
    return (
      <div>
        <p>Number of tasks: {this.props.options.length}</p>
        {
          this.props.options.map((item) =>  <Option key={item} task={item}/>)
        }
      </div>
    )
  };
};
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.task}</p>
      </div>
    )
  };
};
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
class MyApp extends React.Component {
  render() {
    const title = "Task Manage App";
    const options = ["task A", "task B", "task C"]

    return (
      <div>
        <Header title={title} />
        <Action />
        <AllOptions options={options} />
        <AddOption />
      </div>
    )
  };
};

ReactDOM.render(<MyApp />, document.getElementById('app'))

