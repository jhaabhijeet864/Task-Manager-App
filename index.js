import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { ThemeProvider } from './theme/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

const App = lazy(() =>
  import('./App').catch((err) => {
    console.error("Failed to load App component", err);
    return { default: () => <div>Error loading App</div> };
  })
);

ReactDOM.render(
  <React.StrictMode>
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={lazy(() => import('./App'))} />
    <Route path="/about" component={lazy(() => import('./About'))} />
    {/* Add more routes as needed */}
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  </Provider>
);
