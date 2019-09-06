import React from 'react';

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
export default AddOption;