import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../../ModalCards/ActionableModalCard';
import WorkHoursForm from './WorkHoursForm';
import ActionItem from '../../ActionItem/component';
import store from '../../../store';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [ showModal, setShowModal ] = useState(false);
    const [ startTime, setStartTime ] = useState('09:00');
    const [ endTime, setEndTime ] = useState('15:00');
    const [ days, setDays ] = useState<{ value: string, isChecked: boolean}[]>([]);

    const onSave = () => {

        store.getData().then(data => {
            days.filter(day => day.isChecked)
                .forEach(day => {
                    data[day.value] = { 
                        ...data[day.value], 
                        workHours: {
                            start: startTime, 
                            end: endTime
                        }
                    };
                });

            store.save( data );
        });

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

                days={days}
                setDays={setDays} />

        </ActionableModalCard>

    return (
        <ActionItem label="Working Hours" 
            labelPos="right" 
            icon={timeOutline} 
            showModal={() => setShowModal(true)}>

            {showModal ? modal : false}

        </ActionItem>
    );
};

export default WorkHoursActionItem;
