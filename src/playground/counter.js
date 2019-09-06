class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0 
    };
  }
  handleAddOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    });
  }
  
  handleMinusOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset(){
    this.setState({
      count: 0
    });
  }

  render() {
    
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  };
};
ReactDOM.render(<Counter />, document.getElementById('app'))