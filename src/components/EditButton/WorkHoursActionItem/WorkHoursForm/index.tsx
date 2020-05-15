import React, { useState } from 'react';
import { IonDatetime, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import './style.scss';
import DaysChips from '../../../DaysChips/lindex';

interface ContainerProps {
    startTime: string,
    setStartTime: Function,

    endTime: string,
    setEndTime: Function,

    onDaysChange: Function
}

const WorkHoursForm: React.FC<ContainerProps> = (props) => {

    const {startTime, setStartTime, endTime, setEndTime, onDaysChange} = props;
    const [ isSelectAll, setIsSelectAll ] = useState(true);

    const handleDaysChange = (days: string[]) => {
        onDaysChange( days );
    }

    return (
        <>
            <IonItem>
                <IonLabel>From</IonLabel>
                <IonDatetime 
                    displayFormat="HH:mm" 
                    value={startTime} 
                    onIonChange={e => setStartTime(e.detail.value!)}
                    >
                </IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel>To</IonLabel>
                <IonDatetime 
                    displayFormat="HH:mm" 
                    value={endTime}
                    onIonChange={e => setEndTime(e.detail.value!)}>
                </IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel>Same for all work days?</IonLabel>
                <IonCheckbox checked={isSelectAll} onIonChange={() => setIsSelectAll(!isSelectAll)} />
            </IonItem>

            <div className={`days ${isSelectAll ? 'is-disabled' : ''}`}>
                <IonLabel>Select days</IonLabel>
                <div><DaysChips onChange={handleDaysChange}/></div>
            </div>
        </>
    );
}

export default WorkHoursForm;
