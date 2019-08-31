'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp(props) {
    _classCallCheck(this, MyApp);

    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOpption = _this.handleAddOpption.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteSingleOption',
    value: function handleDeleteSingleOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          // Kiem tra xem phan tu nao return false se bi xoa di
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var rndNumber = Math.floor(Math.random() * this.state.options.length);
      var rndTask = this.state.options[rndNumber];
      alert(rndTask);
    }
  }, {
    key: 'handleAddOpption',
    value: function handleAddOpption(option) {
      // Validation (Neu sai se tra ve cho component AddOption mot chuoi string)
      if (!option) {
        return 'Enter something to add task';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This task already exists';
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Task Manage App";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick }),
        React.createElement(AllOptions, { options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteSingleOption: this.handleDeleteSingleOption }),
        React.createElement(AddOption, { handleAddOpption: this.handleAddOpption })
      );
    }
  }]);

  return MyApp;
}(React.Component);

;

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      'Help you know that to do !'
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'This is your task'
    ),
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

var AllOptions = function AllOptions(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove all'
    ),
    React.createElement(
      'p',
      null,
      'Number of tasks: ',
      props.options.length
    ),
    props.options.map(function (item) {
      return React.createElement(Option, { key: item, task: item,
        handleDeleteSingleOption: props.handleDeleteSingleOption });
    })
  );
};
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.task
    ),
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          return props.handleDeleteSingleOption(props.task);
        } },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOpption = _this2.handleAddOpption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOpption',
    value: function handleAddOpption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      // Neu khong co loi thi component cha se khong tra ve gia tri
      // Neu co loi thi se duoc gan vao error va in ra ngoai
      var error = this.props.handleAddOpption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOpption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Submit'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

MyApp.defaultProps = {
  options: []
};

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('app'));
