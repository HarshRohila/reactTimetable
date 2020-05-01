import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { Plugins } from '@capacitor/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TimeTable from './pages/TimeTable';

const { Storage } = Plugins;
const WORK_HOURS = 'workHours';
const WORK_DAYS = 'workDays';

const App: React.FC = () => {

    Storage.get({ key: WORK_HOURS }).then(async ({ value }) => {
        if (!value) {
            const workHours = {
                start: 900,
                end: 1500
            };
            await Storage.set({ key: WORK_HOURS, value: JSON.stringify(workHours) });

            const workDays = {
                MON: true, TUE: true, WED: true,
                THU: true, FRI: true, Sat: false,
                SUN: false
            };

            await Storage.set({ key: WORK_DAYS, value: JSON.stringify(workDays) });
        } else {
            console.log('not first')
        }
    });

    return (
            <IonApp>
                <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} exact={true} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        );
    }

export default App;
