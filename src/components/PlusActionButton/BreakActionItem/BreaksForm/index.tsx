import React, { useState } from 'react';
import { IonDatetime, IonItem, IonLabel, IonInput } from '@ionic/react';
import './style.scss';
import DurationChips from './DurationChips';
import DaysChips from '../../../DaysChips/lindex';

const BreaksForm: React.FC = () => {

    const handleDurationChange = (duration: string) => {
        const toMins = (duration: string) => {
            const [ magnitudeStr, unit ] = duration.split(' ');
            const magnitude = parseInt( magnitudeStr );

            return magnitude * (unit === 'hr' ? 60 : 1);
        }

        const [ hrs, mins ] = startTime.split(':').map( i => parseInt(i) );
        const date = new Date();
        date.setHours( hrs );
        date.setMinutes( mins + toMins(duration) );

        setEndTime( date.toString() );
    }

    const [ startTime, setStartTime ] = useState('11:00');
    const [ endTime, setEndTime ] = useState('12:00');

    const handleDaysChange = (days: string[]) => {
        console.log(days);
    }

    return (
        <>
            <IonItem>
                <IonLabel>From</IonLabel>
                <IonDatetime 
                    displayFormat="h:mm a" 
                    value={startTime} 
                    onIonChange={e => setStartTime(e.detail.value!)} />
            </IonItem>

            <IonLabel>Duration</IonLabel>

            <DurationChips onDurationChange={handleDurationChange}/>

            <IonItem>
                <IonLabel>To</IonLabel>
                <IonDatetime 
                    displayFormat="h:mm a"
                    value={endTime} 
                    onIonChange={e => setEndTime(e.detail.value!)} />
            </IonItem>

            <DaysChips onChange={handleDaysChange}/>

            <IonItem>
                <IonLabel>Label</IonLabel>
                <IonInput placeholder="Label"></IonInput>
            </IonItem>
        </>
    )
}

export default BreaksForm;
