import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../../ModalCards/ActionableModalCard';
import WorkHoursForm from './WorkHoursForm';
import ActionItem from '../../ActionItem/component';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [showModal, setShowModal] = useState(false);

    const modal = <ActionableModalCard title="Set Work Hours" onClose={() => setShowModal(false)}>
        <WorkHoursForm />
    </ActionableModalCard>

    return (
        <ActionItem label="Working Hours" labelPos="right" icon={timeOutline} showModal={() => setShowModal(true)}>
            {showModal ? modal : false}
        </ActionItem>
    );
};

export default WorkHoursActionItem;
