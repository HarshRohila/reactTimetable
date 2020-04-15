import React from 'react';
import { IonDatetime, IonHeader, IonTitle, IonItem, IonLabel, IonChip, IonCard, IonCardContent, IonInput } from '@ionic/react';
// import './style.scss';

const BreaksForm: React.FC = () => {

    const minLabels = ['15', '30', '45'].map(i => `${i} mins`);
    const hourLabels = ['1', '2'].map(i => `${i} hr`);
    const durationLabels = minLabels.concat(hourLabels);

    const durationChips = durationLabels.map(i => {
        return (
            <IonChip outline color="primary">
                <IonLabel>{i}</IonLabel>
            </IonChip>
        )
    })

    return (
        <IonCard>
            <IonCardContent>
                <IonHeader>
                    <IonTitle>Add Break</IonTitle>
                </IonHeader>

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
            </IonCardContent>
        </IonCard>
    )
}

export default BreaksForm;
