import { IonContent, IonPage, IonItem, IonLabel, IonList, IonRadioGroup, IonRadio } from '@ionic/react';
import React from 'react';
import './style.scss';

const TimeTable: React.FC = () => {

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                    .map(i => {
                        return (
                            <IonItem>
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
                <IonList>
                    <IonRadioGroup>
                        {days}
                    </IonRadioGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default TimeTable;
