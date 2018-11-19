import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'click me';
}

//Create react component
const App = function() {
    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);