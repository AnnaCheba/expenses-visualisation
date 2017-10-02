import React from 'react';

export default class Upload extends React.Component {

    render() {
        return (
            <form action="/rest/expenses/upload" method="post" encType="multipart/form-data">
                <label htmlFor="file">Choose .csv file to upload</label>
                <input type="file" id="file" className="" name="file" multiple />
                <button>Submit</button>
            </form>
        );
    }
}
