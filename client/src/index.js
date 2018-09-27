import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import adminReducer from './store/reducers/admin';
import authReducer from './store/reducers/auth';
import eventReducer from './store/reducers/event';

const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    event: eventReducer
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

console.log(store)
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
