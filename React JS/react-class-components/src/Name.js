/** @format */

import React from "react";

class Name extends React.Component {
    constructor(props) {
        super(props);

        //initialize states
        this.state = { name: "", date: new Date().toLocaleTimeString() };

        //initialize methods
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        this.setState({ name: event.target.value });
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date().toLocaleTimeString() });
        }, 1000);
    }

    render() {
        return (
            <>
                <h1>{this.props.greet}</h1>
                <h1>It is {this.state.date}</h1>
                <h1>{this.state.name}</h1>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
            </>
        );
    }
}

// Name.defaultProps = {
//     greet: "Hello World",
// };

export default Name;
