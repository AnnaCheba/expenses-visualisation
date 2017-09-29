import React from 'react';
// import styles from './App.css';

export default class Upload extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { test: 'foo' };
    // }
    render() {
        return (
            <form>
                <label htmlFor="file">Choose file to upload</label>
                <input type="file" id="file" name="file" multiple />
                <button>Submit</button>
            </form>
        );
    }
}
