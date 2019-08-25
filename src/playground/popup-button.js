class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visible: false
    }
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  };

  render() {
    return (
      <div>
        <h2>Popup button</h2>
        <button onClick={this.handleClick}>{this.state.visible ? "Hide content" : "Show content"}</button>
        {this.state.visible &&
          <div>
            <p>This is the content inside ~</p>
          </div>
        }
      </div>
    )
  };
}

ReactDOM.render(<Popup />, document.getElementById('app'))