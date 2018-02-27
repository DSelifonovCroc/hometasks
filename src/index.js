import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import getStore from './store';

import './index.css';


const store = getStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
