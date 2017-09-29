import React from 'react';
import 'rxjs';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Upload from './Components/UploadTable';

const app = (
    <Provider store={store}>
        <Upload />
    </Provider>
);

render(app, document.getElementById('eva'));
