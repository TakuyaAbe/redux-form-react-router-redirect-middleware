import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './store'
import { HashRouter } from 'react-router-dom';
import Form1 from './WizardFormFirstPage';
import Form2 from './WizardFormSecoundPage';
import Form3 from './WizardFormThirdPage';



ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <ConnectedRouter history={history}>
        <div>
          <h1>
            redux-form-react-router-redirect-middleware-sample
          </h1>
          <Switch>
            <Route exact path="/" component={Form1} />
            <Route exact path="/2" component={Form2} />
            <Route exact path="/3" component={Form3} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </div>
      </ConnectedRouter>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
