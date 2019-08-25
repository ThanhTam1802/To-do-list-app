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
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(this.props.options);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What should I do?</button>
        <p>Number of tasks: {this.props.options.length}</p>
        {
          this.props.options.map((item) => <Option key={item} task={item} />)
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
  handleAddTask(e) {
    e.preventDefault();

    const task = e.target.elements.option.value.trim();
    if (task) {
      alert(task);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTask}>
          <input type="text" name='option'></input>
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

