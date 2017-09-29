import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import reducer from './reducers/';
import rootEpic from './epics/';
import { ALL_PROJECTS_KEY } from './action-types/';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const prop = 12;

const obj = {
    [prop]: prop,
};

const initialState = {
    activeConfiguration: null,
    configurationsOrder: [],
    configurations: {},
    activeProject: null,
    projects: {
        [ALL_PROJECTS_KEY]: {
            id: ALL_PROJECTS_KEY,
            label: 'All Projects',
        },
    },
    issueTypes: {},
    priorities: {},
    statuses: {},
    apiRootUrl: '/jira',
    connectedEvents: {
        ISSUE_COMMENTED: ['ISSUE_COMMENT_EDITED', 'ISSUE_COMMENT_DELETED'],
    },
};

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
        applyMiddleware(epicMiddleware),
        applyMiddleware(logger),
    ),
);

export default store;
