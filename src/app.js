class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOpption = this.handleAddOpption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // Doing nothing :)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteSingleOption(optionToRemove) {
    this.setState((prevState) => ({
      // Kiem tra xem phan tu nao return false se bi xoa di
      options: prevState.options.filter((option) => {
        return option !== optionToRemove;
      })
    }))
  }

  handlePick() {
    const rndNumber = Math.floor(Math.random() * this.state.options.length);
    const rndTask = this.state.options[rndNumber];
    alert(rndTask);
  }
  handleAddOpption(option) {
    // Validation (Neu sai se tra ve cho component AddOption mot chuoi string)
    if (!option) {
      return 'Enter something to add task';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This task already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = "Task Manage App";

    return (
      <div>
        <Header title={title} />
        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <AllOptions options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption} />
        <AddOption handleAddOpption={this.handleAddOpption} />
      </div>
    )
  };
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Help you know that to do !</h2>
    </div>
  )
};

const Action = (props) => {
  return (
    <div>
      <p>This is your task</p>
      <button onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What should I do?</button>
    </div>
  )
};

const AllOptions = (props) => {
  return (
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
  )
};
const Option = (props) => {
  return (
    <div>
      <p>{props.task}</p>
      <button
        onClick={(e) => props.handleDeleteSingleOption(props.task)}>
        Remove
      </button>
    </div>
  )
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOpption = this.handleAddOpption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOpption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    // Neu khong co loi thi component cha se khong tra ve gia tri
    // Neu co loi thi se duoc gan vao error va in ra ngoai
    const error = this.props.handleAddOpption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOpption}>
          <input type="text" name='option'></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

MyApp.defaultProps = {
  options: []
};

ReactDOM.render(<MyApp />, document.getElementById('app'))

