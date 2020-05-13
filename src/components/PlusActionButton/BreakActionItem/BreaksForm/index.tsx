import React, { Fragment, FormEvent } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonInput, IonList, IonRadioGroup, IonRadio } from '@ionic/react';
import './style.scss';

const BreaksForm: React.FC = () => {

    const minLabels = ['15', '30', '45'].map(i => `${i} mins`);
    const hourLabels = ['1', '2'].map(i => `${i} hr`);
    const durationLabels = minLabels.concat(hourLabels);

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        
    }

    const durationChips = durationLabels.map(i => {
        return (
            <IonChip outline color="primary" key={i}>
                <label>
                    {i}
                    <input type="radio" name="duration" value={i} onInput={onChange}></input>
                </label>
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
            <IonList>
                <IonRadioGroup>
                    {durationChips}
                </IonRadioGroup>
            </IonList>

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
