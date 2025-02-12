import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { ThemeProvider } from './theme/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/" component={App} />
              {/* Add more routes as needed */}
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
