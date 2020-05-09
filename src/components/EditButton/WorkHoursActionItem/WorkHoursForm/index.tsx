import React, { Fragment, useState, useEffect } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonCheckbox } from '@ionic/react';
import { Plugins } from '@capacitor/core';

import './style.scss';
import { DAYS } from '../../../../constants';

const { Storage } = Plugins;

const WorkHoursForm: React.FC<{setOnSave: React.Dispatch<React.SetStateAction<() => void>>}> = ({ setOnSave }) => {

    const loadingTemplate = <h1>Loading...</h1>;
    const [ startTime, setStartTime ] = useState('09:00');
    const [ endTime, setEndTime ] = useState('15:00');
    const [ showLoading, setShowLoading ] = useState(true);
    const [ days, setDays ] = useState<string[]>([]);

    useEffect(() => {
        Storage.get({ key: DAYS }).then(({ value }) => {
            if (!value) {
                console.error('Work Hours not found');
            } else {
                const days = JSON.parse( value );
                
                const daysArray = Object.keys( days )
                    .filter(k => days[k].isWorkDay);
                
                setDays(daysArray);

                setShowLoading(false);
            }
        });

        const onSave = () => console.log('save clicked')
        setOnSave(() => onSave);
    }, [ setOnSave ]);

    const daysChips = days.map(k => (
            <IonChip outline color="primary" key={k}>
                <IonCheckbox checked={true}></IonCheckbox>
                <IonLabel>{k}</IonLabel>
            </IonChip>
        ));

    const [ isSelectAll, setIsSelectAll ] = useState(true);

    const template = <Fragment>
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
            <div>{daysChips}</div>
        </div>

    </Fragment>;

    return showLoading ? loadingTemplate : template;
}

export default WorkHoursForm;
