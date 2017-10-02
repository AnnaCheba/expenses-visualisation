import React from 'react';
import 'rxjs';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Upload from './Components/UploadTable';
import ListItem from './Components/ListItem';
import PieChart from 'react-simple-pie-chart';

const app = (
    <Provider store={store}>
        <div>
            <Upload />
            <ul>
                <ListItem />
            </ul>
            <PieChart
                slices={[
                    {
                        color: '#f00',
                        value: 10,
                    },
                    {
                        color: '#0f0',
                        value: 20,
                    },
                ]}
            />
        </div>
    </Provider>
);

render(app, document.getElementById('eva'));
