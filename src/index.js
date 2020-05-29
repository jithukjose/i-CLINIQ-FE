import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './app/assets/scss/paper-dashboard.scss?v=1.1.0';
import './app/assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import AdminLayout from './app/layouts/Admin.js';
import DoctorLayout from './app/layouts/doctor.js';
import LabTechnicianLayout from './app/layouts/lab_technician';

import getStore from './app/Store/store';
import { createBrowserHistory } from 'history';
const { store } = getStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
        <Route
          path='/lab-technician'
          render={(props) => <LabTechnicianLayout {...props} />}
        />
        <Route path='/doctor' render={(props) => <DoctorLayout {...props} />} />

        <Redirect to='/admin/dashboard' />
      </Switch>
    </Router>
    ,
  </Provider>,
  document.getElementById('root')
);
