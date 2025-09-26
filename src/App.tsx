import React from 'react';
import { IonApp, setupIonicReact, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tabs from './pages/Tabs';
import HomeTab from './pages/HomeTab';
import Chart from './pages/Chart';

setupIonicReact();

// Discussion points
// useEffect cleanup methods are not always executed when navigating back to pages
// This happens because Ionic router caches pages and doesn't destroy components
// As a result, state changes in one page can affect other pages in the background that have useEffect dependencies

// Issues identified
// Memory leaks occur because components are not properly unmounted
// Unnecessary lifecycle methods continue running in the background

// Questions to investigate
// 1. Can we use simple react router instead of ionic router?
// 2. Are there any solutions that work for useEffect cleanup methods?
// 3. What solutions exist if Ionic caches components and lifecycles run in the background (which is wasteful)?

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/tabs" component={Tabs} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/test" component={HomeTab} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;