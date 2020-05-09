import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../../ModalCards/ActionableModalCard';
import WorkHoursForm from './WorkHoursForm';
import ActionItem from '../../ActionItem/component';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [showModal, setShowModal] = useState(false);
    const [onSave, setOnSave] = useState<() => void>(() => () => {});

    const modal = 
    <ActionableModalCard 
        title="Set Work Hours" 
        onClose={() => setShowModal(false)}
        onSave={onSave}>
        <WorkHoursForm setOnSave={setOnSave} />
    </ActionableModalCard>

    return (
        <ActionItem label="Working Hours" labelPos="right" icon={timeOutline} showModal={() => setShowModal(true)}>
            {showModal ? modal : false}
        </ActionItem>
    );
};

export default WorkHoursActionItem;
