import React, { useState } from 'react';
import { pauseCircleOutline } from 'ionicons/icons';
import ModalCard from '../ModalCards/ModalCard';
import BreaksForm from '../BreaksForm';
import ActionItem from '../ActionItem/component';
// import './ExploreContainer.css';

interface ContainerProps { }

const BreakActionItem: React.FC<ContainerProps> = () => {

    const [showModal, setShowModal] = useState(false);

    const addBreakChild = <ModalCard title="Add Break" onClose={() => setShowModal(false)}>
                        <BreaksForm></BreaksForm>
                    </ModalCard>

    return (
        <ActionItem label="Break" icon={pauseCircleOutline} showModal={() => setShowModal(true)}>
            {showModal ? 
                addBreakChild : 
                false}
        </ActionItem>
    );
};

export default BreakActionItem;
