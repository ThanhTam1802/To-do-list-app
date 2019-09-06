import React from 'react';
// COMPONENTS
import AddOption from './AddOption.jsx';
import Action from './Action.jsx';
import Header from './Header.jsx';
import AllOptions from './AllOptions.jsx';
import OptionModal from './OptionModal.jsx';


class ToDoList extends React.Component {
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

          <OptionModal />

        </div>
      )
    };
  };
  

  ToDoList.defaultProps = {
    options: []
  };
  
  export default ToDoList;