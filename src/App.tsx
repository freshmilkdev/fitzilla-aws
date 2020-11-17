import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from "./config/routes";
import {Authentication} from './components/Authentication/Authentication';

function App() {
  return (
      <Switch>
        <Route path={routes.AUTH.path} exact component={Authentication}/>
      </Switch>
  );
}

export default App;
