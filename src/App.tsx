import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {routes} from "./config/routes";
import {Authentication} from './components/Authentication/Authentication';
import {Home} from "./components/ProtectedApp/Home/Home";
import {ProtectedRoute} from "./components/ProtectedApp/ProtectedRoute/ProtectedRoute";
import {Exercises} from "./components/ProtectedApp/Exercises/Exercises";

Amplify.configure(config);

function App() {
    return (
        <Switch>
            <Route path={routes.AUTH.path} exact component={Authentication}/>
            <ProtectedRoute path={routes.HOME_PAGE.path} exact component={Home}/>
            <ProtectedRoute path={routes.EXERCISES.path} exact component={Exercises}/>
        </Switch>
    );
}

export default App;
