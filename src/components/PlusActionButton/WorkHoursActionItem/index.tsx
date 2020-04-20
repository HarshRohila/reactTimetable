import React, { useState } from 'react';
import { timeOutline } from 'ionicons/icons';
import ActionableModalCard from '../ModalCards/ActionableModalCard';
import WorkHoursForm from '../WorkHoursForm';
import ActionItem from '../ActionItem/component';
// import './ExploreContainer.css';

interface ContainerProps { }

const WorkHoursActionItem: React.FC<ContainerProps> = () => {

    const [showModal, setShowModal] = useState(false);

    const workHoursChild = <ActionableModalCard title="Set Work Hours" onClose={() => {
        console.log('he')
        setShowModal(false);
        console.log(showModal)
        }}>
        <WorkHoursForm />
    </ActionableModalCard>

    return (
        <ActionItem label="Working Hours" icon={timeOutline} showModal={() => setShowModal(true)}>
            {showModal ? workHoursChild : false}
        </ActionItem>
    );
};

export default WorkHoursActionItem;
