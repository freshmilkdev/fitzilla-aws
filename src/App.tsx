import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import routes from "./config/routes";
import {Authentication} from './components/Authentication/Authentication';
import {Home} from "./components/Home/Home";
import {PrivateRoute} from "./components/Core/PrivateRoute/PrivateRoute";

Amplify.configure(config);

function App() {
    return (
        <Switch>
            <Route path={routes.AUTH.path} exact component={Authentication}/>
            <PrivateRoute path={routes.HOME_PAGE.path} exact component={Home}/>
        </Switch>
    );
}

export default App;
