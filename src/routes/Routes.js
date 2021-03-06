import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
const UsersPage = lazy(() => import('pages/UsersPage/UsersPage'));
const UrbanDictionaryPage = lazy(() =>
  import('pages/UrbanDictionaryPage/UrbanDictionaryPage')
);

const StarWarsPage = lazy(() => import('pages/StarWarsPage/StarWarsPage'));

const Routes = () => {
  return (
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={UsersPage} />
          <Route path="/urban" component={UrbanDictionaryPage} />
          <Route path="/star-wars" component={StarWarsPage} state={'saga'} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
