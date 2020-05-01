import React, { Fragment, useState, useEffect } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonInput, IonCheckbox } from '@ionic/react';
import { Plugins } from '@capacitor/core';

import './style.scss';
import { WORK_HOURS } from '../../../../constants';

const { Storage } = Plugins;

const WorkHoursForm: React.FC = () => {

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
                    .map(i => {
                        return (
                                <IonChip outline color="primary" key={i}>
                                    <IonCheckbox></IonCheckbox>
                                    <IonLabel>{i}</IonLabel>
                                </IonChip>
                        );
                    });

    const loadingTemplate = <h1>Loading...</h1>;
    const [ startTime, setStartTime ] = useState('start');
    const [ endTime, setEndTime ] = useState('end');
    const [ showLoading, setShowLoading ] = useState(true);

    useEffect(() => {
        Storage.get({ key: WORK_HOURS }).then(({ value }) => {
            if (!value) {
                console.error('Work Hours not found');
            } else {
                const workHours = JSON.parse( value );
                const { start, end } = workHours;
                setStartTime(start);
                setEndTime(end);
                setShowLoading(false);
            }
        });
    });

    const template = <Fragment>
        <IonItem>
            <IonLabel>From</IonLabel>
            <IonDatetime displayFormat="HH:mm" value={startTime}></IonDatetime>
        </IonItem>

        <IonItem>
            <IonLabel>To</IonLabel>
            <IonDatetime displayFormat="HH:mm" value={endTime}></IonDatetime>
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
    </Fragment>;

    return showLoading ? loadingTemplate : template;
}

export default WorkHoursForm;
