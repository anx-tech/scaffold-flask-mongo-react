import React from 'react';
import ReactDOM from 'react-dom';


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            errors: '',
        }
    }

    onTitleChanged(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onTextChanged(e) {
        this.setState({
            text: e.target.value,
        });
    }

    onCreateButtonClick(e) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const method = 'POST';
        const body = JSON.stringify({
            title: this.state.title,
            text: this.state.text,
        });

        fetch('/create', {headers, method, body})
        .then((resp) => resp.json())
        .then((json) => {
            if (json.status === 'error') {
                this.setState({
                    errors: json.message
                });
            } else {
                window.location.reload();
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input 
                        placeholder="Title"
                        type="text" 
                        name="title"
                        onChange={(e) => this.onTitleChanged(e)} 
                        value={this.state.title}
                    />
                </div>
                <div>
                    <textarea 
                        name="text"
                        onChange={(e) => this.onTextChanged(e)}
                        defaultValue={this.state.text}
                    />
                </div>
                <button 
                    name="submit"
                    value="create"
                    onClick={(e) => this.onCreateButtonClick(e)}
                >Create</button>

                <div>{this.state.errors}</div>
            </div>
        );
    }
};
