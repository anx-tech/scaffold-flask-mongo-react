import React from 'react';
import ReactDOM from 'react-dom';


function TodoItem(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <span>{props.created}</span>
        </div>
    );
}

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            fetched: false,
        }
    }

    componentDidMount() {
        fetch('/list')
        .then((resp) => resp.json())
        .then((json) => {
            this.setState({
                todos: json.result,
                fetched: true,
            });
        });
    }

    renderSpinner() {
        return <div>Loading</div>;
    }


    renderEmpty() {
        return <div>Nothing here</div>;
    }


    renderItems() {
        return <div>
            {this.state.todos.map(
                (item) => <TodoItem 
                    id={item._id}
                    title={item.title}
                    text={item.text}
                    created={item.created}
                    key={item._id}
                />
            )}
        </div>;
    }

    render() {
        if (!this.state.fetched) {
            return this.renderSpinner();
        } else if (this.state.todos.length === 0) {
            return this.renderEmpty();
        } else {
            return this.renderItems();
        }
    }
};
