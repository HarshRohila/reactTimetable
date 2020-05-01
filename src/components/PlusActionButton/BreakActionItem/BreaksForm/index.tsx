import React, { Fragment } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonInput } from '@ionic/react';
// import './style.scss';

const BreaksForm: React.FC = () => {

    const minLabels = ['15', '30', '45'].map(i => `${i} mins`);
    const hourLabels = ['1', '2'].map(i => `${i} hr`);
    const durationLabels = minLabels.concat(hourLabels);

    const durationChips = durationLabels.map(i => {
        return (
            <IonChip outline color="primary" key={i}>
                <IonLabel>{i}</IonLabel>
            </IonChip>
        )
    })

    return (
        <Fragment>
            <IonItem>
                <IonLabel>From</IonLabel>
                <IonDatetime displayFormat="HH:mm"></IonDatetime>
            </IonItem>

            <IonLabel>Duration</IonLabel>
            {durationChips}

            <IonItem>
                <IonLabel>To</IonLabel>
                <IonDatetime displayFormat="HH:mm"></IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel>Label</IonLabel>
                <IonInput placeholder="Label"></IonInput>
            </IonItem>
        </Fragment>
    )
}

export default BreaksForm;
