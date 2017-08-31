import React from 'react';
import ReactDOM from 'react-dom';
import electron from 'electron';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="Electron" />, document.getElementById('root'));