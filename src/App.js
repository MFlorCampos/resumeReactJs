import React, { Suspense, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import { publicRoute } from './routes/publicRoute';
import SuperRoute from './routes';

import './styles/index.scss';
import Fallback from './components/fallback';
import AOS from 'aos';

function App() {
  const publicRoutes = [
    '/',
    '/:locale',
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path={publicRoutes}>
          {
            publicRoute.map(({ path, component, exact}) => {
              return (
                <SuperRoute key={path} path={path} component={component} exact={exact} />
              )
            })
          }
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
