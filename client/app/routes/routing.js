import React from 'react';
import { Route } from 'react-router';
import App from '../containers/app';
import Prototypes from '../containers/prototypes';
import Dashboard from '../containers/dashboard';
import PrototypeDetail from '../containers/prototypeDetail';
import Devices from '../containers/devices';
import DeviceDetail from '../containers/deviceDetail';
import Signin from '../containers/signin';
import Login from '../containers/login';
import Profile from '../containers/profile';

export default (
  <Route component={App}>
    <Route
      path="/"
      components={Dashboard}
    />
    <Route
      path="/dashboard"
      components={Dashboard}
    />
    <Route
      path="/login"
      components={Login}
    />
    <Route
      path="/signin"
      components={Signin}
    />
    <Route
      path="/prototypes"
      components={Prototypes}
    />
    <Route
      path="/prototypes/:prototypeId"
      components={PrototypeDetail}
    />
    <Route
      path="/devices"
      components={Devices}
    />
    <Route
      path="/devices/:deviceId"
      components={DeviceDetail}
    />
    <Route
      path="/profile"
      components={Profile}
    />
  </Route>
);
