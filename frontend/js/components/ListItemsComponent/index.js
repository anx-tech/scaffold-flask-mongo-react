import React from 'react';
import ReactDOM from 'react-dom';


import ListItems from './view';


export default (node) => {
    ReactDOM.render(
        <ListItems />,
        node
    );
}
