import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../../ModalCards/ActionableModalCard';
import WorkHoursForm from './WorkHoursForm';
import ActionItem from '../../ActionItem/component';
import store from '../../../store';
import { IonToast } from '@ionic/react';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [ showModal, setShowModal ] = useState( false );
    const [ startTime, setStartTime ] = useState('09:00');
    const [ endTime, setEndTime ] = useState('15:00');
    const [ showToast, setShowToast ] = useState( false );

    let selectedDays: string[] = [];

    const onSave = () => {

        store.getData().then(data => {
            selectedDays
                .forEach(day => {
                    data[day] = { 
                        ...data[day], 
                        workHours: {
                            start: startTime, 
                            end: endTime
                        }
                    };
                });

            store.save( data )
                .then(() => setShowToast( true ));
        });

    }

    const handleDaysChange = (days: string[]) => {
        selectedDays = days;
    }

    const modal = 
        <ActionableModalCard 
            title="Set Work Hours" 
            onClose={() => setShowModal(false)}
            onSave={onSave}>

            <WorkHoursForm 
                startTime={startTime}
                setStartTime={setStartTime}
                
                endTime={endTime}
                setEndTime={setEndTime}

                onDaysChange={handleDaysChange}
                />

        </ActionableModalCard>

    return (
        <>
            <ActionItem label="Working Hours" 
                labelPos="right" 
                icon={timeOutline} 
                showModal={() => setShowModal(true)}>

                {showModal ? modal : false}

            </ActionItem>
            <IonToast 
                isOpen={showToast} 
                message="Saved Successfully"
                duration={200}
                onDidDismiss={() => setShowToast( false )}/>
        </>
    );
};

export default WorkHoursActionItem;
