import React, { Fragment } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonInput, IonCheckbox } from '@ionic/react';
import './style.scss';

const WorkHoursForm: React.FC = () => {

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
                    .map(i => {
                        return (
                                <IonChip outline color="primary" key={i}>
                                    <IonLabel>{i}</IonLabel>
                                    <IonCheckbox />
                                </IonChip>
                        );
                    });

    return (
        <Fragment>
            <IonItem>
                <IonLabel>From</IonLabel>
                <IonDatetime displayFormat="HH:mm"></IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel>To</IonLabel>
                <IonDatetime displayFormat="HH:mm"></IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel>Same for all work days?</IonLabel>
                <IonCheckbox checked={false} onIonChange={() => {}} />
            </IonItem>

            <IonLabel>Days</IonLabel>
            {days}
            
            <IonItem>
                <IonLabel>Label</IonLabel>
                <IonInput placeholder="Label"></IonInput>
            </IonItem>
        </Fragment>
    )
}

export default WorkHoursForm;
