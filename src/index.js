import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import store from './config/store'

ReactDOM.render(<Provider store={store}>
                  <Router>
                    <App />
                  </Router>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
