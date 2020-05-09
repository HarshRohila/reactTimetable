import React, { Fragment, useState, useEffect } from 'react';
import { IonDatetime, IonItem, IonLabel, IonChip, IonCheckbox } from '@ionic/react';
import './style.scss';
import store from '../../../../store';

interface ContainerProps {
    startTime: string,
    setStartTime: Function,

    endTime: string,
    setEndTime: Function,

    days: { value: string, isChecked: boolean}[]
    setDays: Function
}

const WorkHoursForm: React.FC<ContainerProps> = (props) => {

    const {startTime, setStartTime, endTime, setEndTime, days, setDays} = props;
    const loadingTemplate = <h1>Loading...</h1>;
    const [ showLoading, setShowLoading ] = useState(true);


    useEffect(() => {
        store.getData().then(data => {
            if (!data) {
                console.error('Work Hours not found');
            } else {
                const daysArray = Object.keys( data )
                    .filter(k => data[k].isWorkDay);
                
                const daysCheckList = daysArray.map(k => ({ value: k, isChecked: true}));

                setDays(daysCheckList);
                setShowLoading(false);
            }
        });

        
    }, [ setDays ]);

    const updateCheckedList = (updatedValue: string, isChecked: boolean) => {
        const index = days.findIndex(({value}) => value === updatedValue);
        const newDaysCheckList = days.slice();
        newDaysCheckList[index].isChecked = isChecked;
        setDays(newDaysCheckList);
    };

    const daysChips = 
        days.map(({value, isChecked}) => (
            <IonChip outline color="primary" key={value}>
                <IonCheckbox checked={isChecked} 
                    onIonChange={e => updateCheckedList(value, e.detail.checked)} />
                <IonLabel>{value}</IonLabel>
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
