import React from 'react';
import ReactDOM from 'react-dom';


//Create react component
const App = function() {
    const buttonText = { text: 'click me' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label class="label" for="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);