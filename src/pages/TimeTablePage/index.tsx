import { IonContent, IonPage } from '@ionic/react';

import React from 'react';
import './style.scss';
import TimeTable from './TimeTable';
import DaysPanel from '../../components/DaysPanel'

const TimeTablePage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="content-child">
                    <DaysPanel />
                    <TimeTable />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TimeTablePage;
