import { IonContent, IonPage, IonItem, IonLabel, IonList, IonRadioGroup, IonRadio } from '@ionic/react';
import React from 'react';
import './style.scss';
import TimeTable from './TimeTable';

const TimeTablePage: React.FC = () => {

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                    .map(i => {
                        return (
                            <IonItem key={i} color="primary">
                                <IonLabel>
                                    {i}
                                </IonLabel>
                                <IonRadio value={i} />
                            </IonItem>
                        );
                    });
    return (
        <IonPage>
            <IonContent>
                <div className="content-child">
                    <IonList>
                        <IonRadioGroup>
                            {days}
                        </IonRadioGroup>
                    </IonList>
                    <TimeTable />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TimeTablePage;
