import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import routes from "./config/routes";
import {Authentication} from './components/Authentication/Authentication';

Amplify.configure(config);

function App() {
    return (
        <Switch>
            <Route path={routes.AUTH.path} exact component={Authentication}/>
        </Switch>
    );
}

export default App;
