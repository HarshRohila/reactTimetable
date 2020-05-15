import React, { ReactElement, useState } from 'react';
import { IonCard, IonCardContent, IonHeader, IonTitle, IonChip, IonCheckbox, IonLabel } from '@ionic/react';
import store from '../../store';
// import './ExploreContainer.css';

interface ContainerProps { onChange: Function }

const DaysChips: React.FC<ContainerProps> = ({ onChange }) => {

    const initialCheckedState: { [key: string]: boolean } = {};

    store.getData()
        .then(data => {
            Object.keys( data )
                .filter(day => data[day].isWorkDay)
                .forEach(day => (initialCheckedState[day] = false));

            setIsLoading( false );
        });

    const [ isLoading, setIsLoading ] = useState( true );
    const loadingTemplate = <h1>Loading...</h1>;

    const [ checkedState, setCheckedState ] = useState( initialCheckedState );

    const handleChange = (day: string, isChecked: boolean) => {
        const newCheckedState = { ...checkedState };
        newCheckedState[day] = isChecked;
        setCheckedState( newCheckedState );

        const selectedDays = Object.keys( newCheckedState ).filter(day => newCheckedState[day]);
        onChange( selectedDays );
    }

    const template = 
        Object.keys( checkedState ).map(day => (
            <IonChip outline color="primary" key={day}>
                <IonCheckbox checked={checkedState[day]} 
                    onIonChange={e => handleChange(day, e.detail.checked)} />
                <IonLabel>{day}</IonLabel>
            </IonChip>
        ));

    return (
        <>
            {isLoading ? loadingTemplate: template}
        </>
    );
};

export default DaysChips;
