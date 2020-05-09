import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../../ModalCards/ActionableModalCard';
import WorkHoursForm from './WorkHoursForm';
import ActionItem from '../../ActionItem/component';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [showModal, setShowModal] = useState(false);

    const onSave = () => {
        console.log(startTime)
        console.log(endTime);
        console.log(days)
    }

    const [ startTime, setStartTime ] = useState('09:00');
    const [ endTime, setEndTime ] = useState('15:00');
    const [ days, setDays ] = useState<{ value: string, isChecked: boolean}[]>([]);

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
        <ActionItem label="Working Hours" labelPos="right" icon={timeOutline} showModal={() => setShowModal(true)}>
            {showModal ? modal : false}
        </ActionItem>
    );
};

export default WorkHoursActionItem;
