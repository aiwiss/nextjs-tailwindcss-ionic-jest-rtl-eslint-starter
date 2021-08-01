import { IonApp, IonRouterOutlet } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from '../pages/home';

const AppShell = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/" render={() => <Home />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default AppShell;
