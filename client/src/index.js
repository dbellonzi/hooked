import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle'
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
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
