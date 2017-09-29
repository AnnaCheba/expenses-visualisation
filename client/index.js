import React from 'react';
import 'rxjs';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

const app = (
    <Provider store={store}>
        <div>hello I am EVA -------</div>
    </Provider>
);

render(app, document.getElementById('eva'));